const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://bob123:bob123@cluster0.kugpsyk.mongodb.net/todo-app'
    );
    console.log('database connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};
