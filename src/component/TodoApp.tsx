import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

interface Todo {
  id: number;
  text: string;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const addTodo = (text: string) => {
    
    const newTodo: Todo = { id: nextId, text };

    setTodos([...todos, newTodo]);
    setNextId(nextId + 1); 
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;
