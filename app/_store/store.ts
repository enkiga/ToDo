import { create } from "zustand";

interface Todo {
  id: number;

  text: string;

  completed: boolean;
}

interface StoreState {
  Todos: Todo[];

  addTodo: (todo: Todo) => void;

  removeTodo: (id: number) => void;

  updateTodo: (id: number, todo: Todo) => void;

  // other state and actions
}

const useStore = create<StoreState>((set) => ({
  Todos: [],

  addTodo: (todo) => set((state) => ({ Todos: [...state.Todos, todo] })),

  removeTodo: (id) =>
    set((state) => ({ Todos: state.Todos.filter((todo) => todo.id !== id) })),

  updateTodo: (id, todo) =>
    set((state) => ({
      Todos: state.Todos.map((t) => (t.id === id ? todo : t)),
    })),

  // other state and actions
}));

export { useStore };
