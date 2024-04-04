import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, owner };
    console.log(newTask);

    fetch("http://localhost:8000/all-tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add new task");
        }
        console.log("New task added");
        //needs to fix the redirect -->
        return history.push("/");
      })
      .catch((err) => {
        console.error("Error adding new task:", err);
        // Optionally, you can display an error message to the user or perform any other actions
      });
  };

  return (
    <div className="create">
      <h2>Add new Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <label>Owner:</label>
        <input
          type="text"
          required
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          name="owner"
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default Create;
