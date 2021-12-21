export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  createdDate?: Date;
  dueDate?: Date;
  completedDate?: Date;
};

export enum Visibility {
  Visible = 'VISIBLE',
  Hidden = 'HIDDEN',
}

export type SaveTodo = ( todoText: string ) => void;
export type ToggleTodo = ( todo: Todo ) => void;
export type HideCompleted = ( hide: boolean ) => void;
