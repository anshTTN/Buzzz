import './App.css';
import './css/style.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import FeedsPage from './components/FeedsPage';
<<<<<<< HEAD
import FriendList from './components/FriendList';
import Signup from './components/Signup';
import UserResults from './components/UserResults';
=======
import Login from './components/Login';
import Friendlist from './components/Friendlist';
>>>>>>> cfa834ef4b21f638658b4497923423a8598eb3e8

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/feedsPage' element={
          <FeedsPage />
<<<<<<< HEAD
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
=======
        }>
        </Route>
        <Route path='/login' element={
          <Login />
        }>
        </Route>
        <Route path='/friendlist' element={<Friendlist />}> </Route>
>>>>>>> cfa834ef4b21f638658b4497923423a8598eb3e8
      </Routes>
    </Router>
  );
}

export default App;
