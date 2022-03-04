import React, { Component } from 'react';
import SearchNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'

class Cart extends Component {

    
  render() {
    return (
        <>
            <SearchNavbar/>
            <p>Voici votre panier:
            </p>



            <Footer/>
        </>
    );
  }
}

export default Cart;