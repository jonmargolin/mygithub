export type Task = {
  id: string;
  title: string;
  created: string;
  status: string;
};
export enum TaskStatus {
  done = 'Done',
  inProgress = 'In Progress',
  toDo = 'To do',
}
