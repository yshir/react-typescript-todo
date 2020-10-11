import React, { useReducer, useState } from 'react';
import { TodoList } from '../components/TodoList';
import { reducer } from '../reducers/todo';

export const TodoListPage: React.FC = () => {
  const initialText = '';
  const [text, setText] = useState(initialText);

  const [todos, dispatch] = useReducer(reducer, []);
  const addTodoHandler = (text: string) => {
    if (!text) {
      return;
    }
    dispatch({ type: 'ADD_TODO', payload: { text } });
    setText(initialText);
  };

  return (
    <div>
      <p>
        <span>new: </span>
        <input type="text" onChange={e => setText(e.target.value)} value={text} />
        <button onClick={() => addTodoHandler(text)}>add</button>
      </p>
      <TodoList todos={todos} />
    </div>
  );
};
