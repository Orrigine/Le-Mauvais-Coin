import React, { Component } from 'react';
import SearchNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'
import { Row, Col } from "react-bootstrap";
import Article from "../components/Article";

class Cart extends Component {

    
  render() {
    return (
        <>
        <SearchNavbar/>
        
        
        <Row>
          <Col sm="2" /><Col sm="8">
            <Row>
              {this.props.cart.length === 0 ?<>
                  <p>No article in cart</p>
                </>
                : this.props.cart.map((article, i) => <Article addArticleToCart={this.props.addArticleToCart} remArticleFromCart={this.props.remArticleFromCart} data={article} inCart={true} />)
              }
            </Row>
          </Col>
        </Row>

        <Footer/>
        </>
    );
  }
}

export default Cart;