import React, { Component } from 'react';
import SearchNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'
import { Row, Col, Alert } from "react-bootstrap";
import Article from "../components/ArticleCard";

class Cart extends Component {

    
  render() {
    return (
        <>
        <SearchNavbar/>
        
        
        <Row>
          <Col sm="2" /><Col sm="8">
            <Row>
              {this.props.cart.length === 0 ?
                <Alert variant="danger">
                  <Alert.Heading>Your cart is empty!</Alert.Heading>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio excepturi optio pariatur tempora, error culpa architecto molestias magnam alias animi ullam, vero officia rem eos quibusdam et. Quam, illum!
                  </p>
                </Alert>
                : this.props.cart.map((tuple, i) => <Article addArticleToCart={this.props.addArticleToCart} remArticleFromCart={this.props.remArticleFromCart} getNumberOfArticle={this.props.getNumberOfArticle} data={tuple.article} viewFromCart={true} />)
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