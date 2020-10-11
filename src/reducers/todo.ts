import React from 'react';
import { v4 as uuid } from 'uuid';
import { TodoType } from '../types/Todo';

type Action =
  | { type: 'ADD_TODO'; payload: { text: string } }
  | { type: 'UPDATE_TODO'; payload: { id: string; text: string } }
  | { type: 'REMOVE_TODO'; payload: { id: string } }
  | { type: 'REMOVE_ALL' };

export const reducer: React.Reducer<TodoType[], Action> = (todos: TodoType[] = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const todo: TodoType = {
        id: uuid(),
        text: action.payload.text,
        done: false,
        displayOrder: 1,
      };
      return [todo, ...todos];
    case 'UPDATE_TODO':
      throw new Error('not implemented yet.');
    case 'REMOVE_TODO':
      return todos.filter(todo => todo.id !== action.payload.id);
    case 'REMOVE_ALL':
      return [];
  }
};
