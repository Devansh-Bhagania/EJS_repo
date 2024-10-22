const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Store tasks in an array (for simplicity, without a database)
let tasks = [];

// Route to render the todo form and task list
app.get('/todo', (req, res) => {
  res.render('index', { tasks: tasks });
});

// Route to handle the form submission
app.post('/addTask', (req, res) => {
  const task = req.body.newTask;
  if (task) {
    tasks.push(task);
  }
  res.redirect('/todo');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
