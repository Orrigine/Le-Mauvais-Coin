import React, { Component } from 'react';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'
import { Row, Col, Alert, Button } from "react-bootstrap";
import Article from "../components/ArticleCard";
import { Link } from 'react-router-dom';
import "../css/Cart.css"

class Cart extends Component {

  emptyCart() {
    this.props.cart.forEach(tuple => {
        this.props.remArticleFromCart(tuple)
      }
    );
  }

  render() {
    if (this.props.cart.length === 0)
      return (
        <>   {/* Empty cart display */}
        <MyNavbar />
        <Row>
          <Col sm="2" /><Col sm="8">
              <Alert variant="danger">
                <Alert.Heading>Your cart is empty!</Alert.Heading>
                <p>
                  Go to <Link to="/">articles page</Link> to add articles in your cart.
                </p>
              </Alert>
          </Col>
        </Row>
        <Footer />
        </>
      )

    let totalPrice = 0
    let totalCount = 0
		this.props.cart.forEach(tuple => {
			totalPrice += tuple.article.attributes.price * tuple.count /100;	
      totalCount += tuple.count
		});
    return (
        <>
        <MyNavbar/>
        
        <Row> {/* Articles in cart display */}
          <Col sm="0" lg="2" /><Col sm="12" lg="8">
            <Row>
              {this.props.cart.map((tuple) => 
                <Article addArticleToCart={this.props.addArticleToCart} remArticleFromCart={this.props.remArticleFromCart} getNumberOfArticle={this.props.getNumberOfArticle} data={tuple.article} viewFromCart={true} />)
              }
            </Row>
          </Col>
        </Row>
        <Row> {/* Payment section */}
          <Col sm="0" lg="2" />
          <Col sm="12" lg="8">
            <Row className="payment">
              <Col sm="12" lg="9"><Button variant="success" disabled="true">You have {totalCount} article(s) in your cart. Total price: {totalPrice.toFixed(2)}€</Button></Col>
              <Col sm="12" lg="3"><Button variant="danger" onClick={() => this.emptyCart()}>Empty cart</Button></Col>
              <Col sm="12"><Button variant="primary">Proceed to payment</Button></Col>
            </Row>
          </Col>
        </Row>
        <Footer/>
        </>
    );
  }
}

export default Cart;