const express = require('express');
const {
  createPostValidator,
  updatePostValidator,
} = require('./middlewares/inputValidator');

const { connect } = require('./database/db');
const { Todo } = require('./database/models');

const app = express();

connect();

app.use(express.json());

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await Todo.find({});
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching all todos' });
  }
});

app.post('/todo', createPostValidator, async (req, res) => {
  const { title, description } = req.body;
  const newTodo = new Todo({
    title,
    description,
    completed: false,
  });

  try {
    const result = await newTodo.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error saving to db' });
  }
});

app.put('/completed', updatePostValidator, async (req, res) => {
  //update logic
  const { id } = req.body;

  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404).json({ message: 'Todo not found' });
    return;
  }

  todo.completed = true;

  const result = await todo.save();

  res.status(201).json(result);
});

app.listen(3000, () => console.log(`Server running on port 3000`));
