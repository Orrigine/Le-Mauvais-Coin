import '../css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Accueil from '../pages/Accueil';
import Page2 from '../pages/Page2';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Accueil />} />
        <Route exact path='/page2' element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;