import React from 'react';
import { TodoType } from '../types/Todo';
import { Todo } from './Todo';

interface IProps {
  todos: TodoType[];
}

export const TodoList: React.FC<IProps> = props => {
  const { todos } = props;
  return (
    <>
      <div>
        {todos.map(todo => (
          <div
            key={todo.id}
            style={{
              cursor: 'pointer',
              border: 'solid 1px #ccc',
              borderRadius: '2px',
              margin: '16px 0',
              padding: '4px',
            }}
          >
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
};
