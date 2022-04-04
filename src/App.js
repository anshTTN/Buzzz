
import './App.css';
import './css/style.css'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Posts from './components/FeedsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/feedsPage' element={
          <Posts />
          
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
