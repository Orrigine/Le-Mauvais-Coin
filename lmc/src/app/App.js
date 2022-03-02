import '../css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import React, {
    Component
} from 'react';

import Accueil from '../pages/Accueil';
import Account from '../pages/Account';
import Browse from '../pages/Browse';
import Cart from '../pages/Cart';
import 'materialize-css';

import { Button, Card, Row, Col } from 'react-materialize';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            cart:[],
        }
    }

    addArticleToCart = (props) => {
        this.SetState({
            cart: [
                ...this.state.article, props.article
            ]
        })
    }

    render(){

        return (
            <Router>
      <Routes>
        <Route exact path='/' element={<Accueil mettre toute injection articles paniers etc />} />
        <Route exact path='/account' element={<Account />} />
        <Route exact path='/browse' element={<Browse />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}
}



export default App;