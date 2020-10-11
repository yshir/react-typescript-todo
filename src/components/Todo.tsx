import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoType } from '../types/Todo';

interface IProps {
  todo: TodoType;
}

export const Todo: React.FC<IProps> = props => {
  const { todo } = props;
  const { dispatch } = useContext(TodoContext);

  const removeTodoHandler = () => {
    dispatch({ type: 'REMOVE_TODO', payload: { id: todo.id } });
  };

  return (
    <>
      <div style={{ padding: '6px' }}>
        <p>{todo.id}</p>
        <p>{todo.text}</p>
        <button onClick={removeTodoHandler}>Remove</button>
      </div>
    </>
  );
};
