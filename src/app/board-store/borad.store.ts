import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Task, TaskStatus } from './board.model';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { ApiService } from '../services/api.service';
type TaskState = {
  tasks: Task[];
  search: string;
  isLoading: boolean;
};

const initialState: TaskState = {
  tasks: [],
  search: '',
  isLoading: true,
};
export const TaskStore = signalStore(
  withState(initialState),
  withComputed(({ tasks, search }) => ({
    todo: computed(() => filterTask(tasks(), TaskStatus.toDo, search())),
    inProgress: computed(() =>
      filterTask(tasks(), TaskStatus.inProgress, search()),
    ),
    done: computed(() => filterTask(tasks(), TaskStatus.done, search())),
  })),
  withMethods((store, apiService = inject(ApiService)) => ({
    addTask(title: string, status: TaskStatus): void {
      // 👇 Updating state using the `patchState` function.
      const task: Task = {
        id: '1233',
        title: title,
        created: '201.100200',
        status: status,
      };
      patchState(store, (state) => ({ tasks: [...state.tasks, task] }));
    },
    moveTaskColumn(id: string, column: TaskStatus): void {
      patchState(store, (state) => ({
        tasks: state.tasks.map((item) => {
          if (item.id === id) {
            return {
              id: item.id,
              title: item.title,
              created: item.created,
              status: column,
            };
          }
          return item;
        }),
      }));
    },
    removeTask(id: string): void {
      patchState(store, (state) => ({ tasks: removeTask(id, state.tasks) }));
    },
    searchChange(text: string): void {
      patchState(store, () => ({ search: text }));
    },
    loadTask: rxMethod<void>(
      pipe(
        debounceTime(600),
        distinctUntilChanged(),
        switchMap(() => {
          return apiService.getTasks().pipe(
            tapResponse({
              next: (tasks: Task[]) => patchState(store, { tasks: tasks }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            }),
          );
        }),
      ),
    ),
  })),
);
const removeTask = (id: string, tasks: Task[]): Task[] => {
  const index = tasks.findIndex((task) => task.id === id);
  const taskList = [...tasks];
  taskList.splice(index, 1);
  return taskList;
};
const filterTask = (
  tasks: Task[],
  status: TaskStatus,
  search: string,
): Task[] => {
  const filterTask = tasks.filter((item) => item.status === status);
  if (search !== '') {
    const filterSearch = filterTask.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()),
    );
    return filterSearch;
  }
  return filterTask;
};
