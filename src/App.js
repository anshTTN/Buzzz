import './App.css';
import './css/style.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import FeedsPage from './components/FeedsPage';
import Login from './components/Login';
import Friendlist from './components/Friendlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/feedsPage' element={
          <FeedsPage />
        }>
        </Route>
        <Route path='/login' element={
          <Login />
        }>
        </Route>
        <Route path='/friendlist' element={<Friendlist />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
