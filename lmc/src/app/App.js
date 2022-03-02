import '../css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Accueil from '../pages/Accueil';
import Account from '../pages/Account';
import Browse from '../pages/Browse';
import Cart from '../pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Accueil />} />
        <Route exact path='/account' element={<Account />} />
        <Route exact path='/browse' element={<Browse />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;