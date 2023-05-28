import React, { useState } from 'react';
import TodoForm from './todoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
      <i className="fa fa-trash delete-icon" onClick={() => removeTodo(todo.id)}></i>
        <i className="fa fa-pen-to-square edit-icon" onClick={() => setEdit({ id: todo.id, value: todo.text })}></i>
      </div>
    </div>
  ));
};

export default Todo;