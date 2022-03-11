import '../css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import React, {
    Component
} from 'react';

import Browse from '../pages/Browse';
import Cart from '../pages/Cart';
import ArticlePage from '../pages/ArticlePage';
import Payement from '../pages/Payement';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            cart:[],
            search: '',   
        }
        if (localStorage.getItem("cart")) {
            this.state = {cart: JSON.parse(localStorage.getItem('cart'))}
        }
    }


    addArticleToCart = (article) => {
        let kart = this.state.cart;
        let updated = false;
        for (let i = 0; i < kart.length; i++) {
            let tuple = kart[i];
            if (tuple.article.id === article.id) {
                tuple.count++;
                updated = true;
        }};
        if (!updated) kart.push({article: article, count: 1});
        this.setState({cart: kart});
        localStorage.setItem('cart', JSON.stringify(kart))
    }

    remArticleFromCart = (article) => {
        let kart = this.state.cart;
        for (let i = 0; i < kart.length; i++) {
            let tuple = kart[i];
            if (tuple.article.id === article.id) {
                if (tuple.count === 1) kart.splice(i, 1);
                else tuple.count--;
        }};
        this.setState({cart: kart});
        localStorage.setItem('cart', JSON.stringify(kart))
    }

    getNumberOfArticle = (article) => {
        for (let i = 0; i < this.state.cart.length; i++) {
            let tuple = this.state.cart[i];
            if (tuple.article.id === article.id) {
                return tuple.count;
        }};
        return 0;
    }

    render(){
        return (     
            
        
    <Router>
      <Routes>
        <Route exact path='/' element={<Browse cart={this.state.cart} addArticleToCart={this.addArticleToCart} remArticleFromCart={this.remArticleFromCart} getNumberOfArticle={this.getNumberOfArticle} />} />
        <Route exact path='/cart' element={<Cart cart={this.state.cart} addArticleToCart={this.addArticleToCart} remArticleFromCart={this.remArticleFromCart} getNumberOfArticle={this.getNumberOfArticle} />} />
        <Route exact path='/article/:id' element={<ArticlePage cart={this.state.cart} addArticleToCart={this.addArticleToCart} remArticleFromCart={this.remArticleFromCart} getNumberOfArticle={this.getNumberOfArticle} />} />
        <Route exact path='/payement' element={<Payement cart={this.state.cart} addArticleToCart={this.addArticleToCart} remArticleFromCart={this.remArticleFromCart} getNumberOfArticle={this.getNumberOfArticle} />} />
      </Routes>
    </Router>
  );
}
}



export default App;