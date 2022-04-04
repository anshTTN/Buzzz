
import './App.css';
import './css/style.css';
import Login from "./components/login.jsx";
import Post from "./components/post.jsx";
import Activity from "./components/activity.jsx";
import Suggestions from "./components/suggestions.jsx";


function App() {
  return (
    <div className="App">
    <Post />

    <Suggestions />
    </div>
  );
}

export default App;
