import Navbar from "./layout/Navbar";
import Create from "./pages/Create";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import TaskDetail from "./pages/TaskDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/task/:id">
              <TaskDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
