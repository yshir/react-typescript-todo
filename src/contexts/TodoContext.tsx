import React, { createContext, useReducer } from 'react';
import { todoReducer, TodoAction } from '../reducers/TodoReducer';
import { TodoType } from '../types/Todo';

export const TodoContext = createContext<{ todos: TodoType[]; dispatch: React.Dispatch<TodoAction> }>({ todos: [], dispatch: () => null });
export const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>;
};
