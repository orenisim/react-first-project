import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const TaskDetail = () => {
  const { id } = useParams();
  const { data: task, isPending } = useFetch(
    `http://localhost:8000/task/${id}`
  );

  const handleDelete = async () => {
    await fetch(`http://localhost:8000/task/${id}`, {
      method: "DELETE",
    })
      .then((res) => console.log("task deleted"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading</div>}
      {task && (
        <article>
          <h2>{task.title}</h2>
          <p>Needs to be done by: {task.owner}</p>
          <br />
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default TaskDetail;
