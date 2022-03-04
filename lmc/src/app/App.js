import '../css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import React, {
    Component
} from 'react';

import Home from '../pages/Home';
import Account from '../pages/Account';
import Browse from '../pages/Browse';
import Cart from '../pages/Cart';
import Menu from '../components/Menu';


import { Button, Card, Row, Col } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            cart:[],
        }
    }

    addArticleToCart = (article) => {
        this.setState({
            cart: [
                ...this.state.cart,
                article
            ]
        })
    }
    render(){
        return (
            
            <Router>
      <Routes>
        <Route exact path='/' element={<Home mettre toute injection articles paniers etc />} />
        <Route exact path='/account' element={<Account />} />
        <Route exact path='/browse' element={<Browse addArticleToCart={this.addArticleToCart} />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}
}



export default App;