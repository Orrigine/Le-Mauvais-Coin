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
import Browse from '../pages/Browse';
import Cart from '../pages/Cart';

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
        const kart = [
                ...this.state.cart,
                article
            ]
        this.setState({cart: kart})
    }

    remArticleFromCart = (article) => {
        const kart = this.state.cart.filter(item => item.id !== article.id);
        this.setState({ cart: kart });
    }



    render(){
        return (
            
            <Router>
      <Routes>
        <Route exact path='/' element={<Home mettre toute injection articles paniers etc />} />
        <Route exact path='/browse' element={<Browse addArticleToCart={this.addArticleToCart} remArticleFromCart={this.remArticleFromCart} />} />
        <Route exact path='/cart' element={<Cart cart={this.state.cart} addArticleToCart={this.addArticleToCart} remArticleFromCart={this.remArticleFromCart}/>} />
      </Routes>
    </Router>
  );
}
}



export default App;