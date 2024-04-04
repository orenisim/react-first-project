import TaskList from "./TaskList";
import useFetch from "./useFetch";


const HomePage = () => {
  const { data: tasks, isPending } = useFetch(
    "http://localhost:8000/all-tasks"
  );

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
};

export default HomePage;
