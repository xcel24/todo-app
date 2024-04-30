import { useEffect, useState } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todo } from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const res = await fetch('http://localhost:3000/todos');
      const data = await res.json();
      setTodos(data);
    };

    getAllTodos();
  }, []);

  return (
    <>
      <CreateTodo />

      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </>
  );
}

export default App;
