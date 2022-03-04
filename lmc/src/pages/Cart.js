import React, { Component } from 'react';
import SearchNavbar from '../components/MyNavbar';


class Cart extends Component {

    
  render() {
    return (
        <>
            <SearchNavbar/>
            <p>Voici votre panier:
            </p>
        </>
      
    );
  }
}

export default Cart;