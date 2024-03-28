import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Task, TaskStatus } from './board.model';
import { taskMock } from './task.mock';
import { computed } from '@angular/core';
type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: taskMock,
};
export const TaskStore = signalStore(
  withState(initialState),
  withComputed(({ tasks }) => ({
    todo: computed(() =>
      tasks().filter((item) => item.status === TaskStatus.toDo),
    ),
    inProgress: computed(() =>
      tasks().filter((item) => item.status === TaskStatus.inProgress),
    ),
    done: computed(() =>
      tasks().filter((item) => item.status === TaskStatus.done),
    ),
  })),
  withMethods((store) => ({
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
  })),
);
