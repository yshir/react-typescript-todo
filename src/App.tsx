import React from 'react';
import { TodoProvider } from './contexts/TodoContext';
import { TodoListPage } from './pages/TodoList';

export const App: React.FC = () => {
  return (
    <>
      <TodoProvider>
        <TodoListPage />
      </TodoProvider>
    </>
  );
};
