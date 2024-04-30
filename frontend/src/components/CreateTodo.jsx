import { useState } from 'react';

export const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTodo = async () => {
    const res = await fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <div>
        <input
          style={{
            padding: 10,
            margin: 10,
          }}
          type='text'
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          style={{
            padding: 10,
            margin: 10,
          }}
          type='text'
          placeholder='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button
          style={{
            padding: 10,
            margin: 10,
          }}
          onClick={handleCreateTodo}
        >
          Create Todo
        </button>
      </div>
    </div>
  );
};
