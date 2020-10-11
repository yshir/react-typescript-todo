import React from 'react';
import { TodoType } from '../types/Todo';

interface IProps {
  todo: TodoType;
}

export const Todo: React.FC<IProps> = props => {
  const { todo } = props;
  return (
    <>
      <div style={{ padding: '6px' }}>
        <p>{todo.id}</p>
        <p>{todo.text}</p>
      </div>
    </>
  );
};
