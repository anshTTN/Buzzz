import './App.css';
import './css/style.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import FeedsPage from './components/FeedsPage';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/feedsPage' element={
          <FeedsPage />
        }>
        </Route>
        <Route path='/' element={
          <Login />
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
