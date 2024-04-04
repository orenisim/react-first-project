import { Link } from "react-router-dom/cjs/react-router-dom.min";

const TaskList = ({ tasks }) => {
  return (
    <div className="blog-list">
      {tasks.map((task) => (
        <div className="blog-preview" key={task._id}>
          <Link to={`task/${task._id}`}>
            <h2>{task.title}</h2>
            <p>{`needs to be done by: ${task.owner}`}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
