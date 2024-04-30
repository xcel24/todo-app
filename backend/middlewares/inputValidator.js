const { createTodoSchema, updateTodoSchema } = require('../types');

const createPostValidator = (req, res, next) => {
  const payload = req.body;
  console.log(payload);

  if (!createTodoSchema.safeParse(payload).success) {
    res.status(400).json({ message: 'Bad Request' });
  }

  next();
};

const updatePostValidator = (req, res, next) => {
  const payload = req.body;

  if (!updateTodoSchema.safeParse(payload).success) {
    res.status(400).json({ message: 'Bad Request' });
  }

  next();
};

module.exports = {
  createPostValidator,
  updatePostValidator,
};
