import './App.css';
import './css/style.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import FeedsPage from './components/FeedsPage';
import UserList from './components/UserList';
import FriendList from './components/FriendList';
import Signup from './components/Signup';
import {UsersProvider} from './context/UsersContext.jsx';
import {FriendsProvider} from './context/FriendsContext.jsx';

function App() {
  return (
    <UsersProvider>
    <FriendsProvider>
    <Router>
      <Routes>
        <Route path='/feedsPage' element={
          <FeedsPage />
        } />
        <Route path='/' element={
          <UserList />
        } />
        <Route path='/signup' element={
          <Signup />
        } />
        <Route path='/friendList' element={
          <FriendList />
        } />
      </Routes>
    </Router>
    </FriendsProvider>
    </UsersProvider>
  );
}

export default App;
