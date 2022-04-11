import './App.css';
import './css/style.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import FeedsPage from './components/FeedsPage';
import FriendList from './components/FriendList';
import Signup from './components/Signup';
import UserResults from './components/UserResults';
import Login from './components/Login';
import AuthRoute from './components/AuthRoute';
import Profile from './components/Profile';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Login />
        } />
          <Route path='/signup' element={
            <Signup />
          } />


          {/* AuthRoutes */}
          <Route path='/feedsPage' element={
          <AuthRoute>
          <FeedsPage />
          </AuthRoute>
          }
          />
          <Route path='/profile' element={
          <AuthRoute>
          <Profile />
          </AuthRoute>
          }
          />
          
          <Route path='/forgotpswd' element={
          <ForgotPassword />
        } />
        <Route path='/users/:name' element={
          <UserResults />
        } />
        <Route path='/friendList' element={
          <FriendList />
        } />
      </Routes>
      {/* <AuthRoute path='/feedsPage' component={FeedsPage}/> */}
    </Router>
  );
}

export default App;
