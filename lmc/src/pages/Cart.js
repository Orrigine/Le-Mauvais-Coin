import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { Button, Card, Row, Col } from 'react-bootstrap';
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