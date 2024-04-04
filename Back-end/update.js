const mongoose = require("mongoose");
const Task = require("./models/task");



const dbURI =
  "mongodb+srv://oren:Oren123456@cluster1.wtd4vma.mongodb.net/first-practice?retryWrites=true&w=majority&appName=Cluster1";

mongoose
  .connect(dbURI)
  .then((result) => console.log("connected"))
  .catch((err) => console.log(err));



//adding some tasks->
const task1 = new Task({
  title: "finish my day",
  owner: "Oren",
  id: 1,
});

const task2 = new Task({
  title: "got to TLV",
  owner: "Oren",
  id: 2,
});

const task3 = new Task({
  title: "find parking in TLV",
  owner: "Ben",
  id: 3,
});

task1
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

task2
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

task3
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
