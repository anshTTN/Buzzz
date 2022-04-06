import './App.css';
import './css/style.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import FeedsPage from './components/FeedsPage';
import SearchedUsers from './components/SearchedUsers';
import TestHome from './components/TestHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/feedsPage' element={
          <FeedsPage />
        } />
        <Route path='/' element={
          <SearchedUsers />
        } />
      </Routes>
    </Router>
  );
}

export default App;
