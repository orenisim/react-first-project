const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); // Add this line
const Task = require("./models/task");

const server = express();

// Enable CORS middleware
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const dbURI = "FIll Your MongoDB connection detaild here!!!!"

mongoose
  .connect(dbURI)
  .then((result) => server.listen(8000))
  .catch((err) => console.log(err));

//handle get all the tasks from the DB - http://localhost:8000/all-tasks
server.get("/all-tasks", (req, res) => {
  Task.find()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//handle get task by the id the DB - http://localhost:8000/task/:id
server.get("/task/:id", (req, res) => {
  Task.findById(req.params.id)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//handle delete task by id
server.delete("/task/:id", (req, res) => {
  const id = req.params.id;

  Task.findByIdAndDelete(id)
    .then((res) => console.log("Task Deleted"))
    .catch((err) => console.log(err));
});

//handle add task (POST requests)
server.post("/all-tasks", (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const owner = req.body.owner;
  const task = new Task({ title, owner });
  task
    .save()
    .then((e) => console.log("The new task saved in the DB"))
    .catch((err) => console.log(err));
});
