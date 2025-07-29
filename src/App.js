import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
      toast.success('Todo added successfully');
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error('Todo removed successfully');
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default App;