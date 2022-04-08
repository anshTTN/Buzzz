import './App.css';
import './css/style.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import FeedsPage from './components/FeedsPage';
import FriendList from './components/FriendList';
import Signup from './components/Signup';
import UserResults from './components/UserResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/feedsPage' element={
          <FeedsPage />
        } />
        <Route path='/signup' element={
          <Signup />
        } />
        <Route path='/users/:name' element={
          <UserResults />
        } />
        <Route path='/friendList' element={
          <FriendList />
        } />
      </Routes>
    </Router>
  );
}

export default App;
