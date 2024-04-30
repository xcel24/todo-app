export const Todo = ({ todo }) => {
  const completeHandler = async (id) => {
    const res = await fetch('http://localhost:3000/completed', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: {
        id,
      },
    });
  };

  return (
    <div>
      <h2>Title is : {todo.title}</h2>
      <h4>Description is: {todo.description}</h4>
      {todo.completed ? (
        <h4>Completed</h4>
      ) : (
        <button onClick={() => completeHandler(todo._id)}>
          {' '}
          Mark as Completed
        </button>
      )}
    </div>
  );
};
