import React, { Component } from 'react';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'
import { Row, Col, Alert, Button } from "react-bootstrap";
import Article from "../components/ArticleCard";
import { Link } from 'react-router-dom';
import "../css/Cart.css"

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            
        };
    }

  emptyCart() {
    this.props.cart.forEach(tuple => {
        this.props.remArticleFromCart(tuple.article)
      }
    );
  }

  render() {
    if (this.props.cart.length === 0)
      return (
        <>   {/* Empty cart display */}
        <MyNavbar />
        <Row className='main'>
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
        
        <Row className='main'> {/* Articles in cart display */}
          <Col sm="0" lg="2" /><Col sm="12" lg="8">
            <Row>
              {this.props.cart.map((tuple) => 
                <Article key={tuple.article.id.toString()} addArticleToCart={this.props.addArticleToCart} remArticleFromCart={this.props.remArticleFromCart} getNumberOfArticle={this.props.getNumberOfArticle} data={tuple.article} viewFromCart={true} />)
              }
            </Row>
          </Col>
        </Row>
        <Row> {/* Payment section */}
          <Col sm="0" md="2" lg="4" />
          <Col sm="12" md="8" lg="4">
            <Row classNameName="payment">
              <Col sm="12" classNameName='priceAndEmpty'>
                <Button variant="success" disabled={true}>You have {totalCount} article(s) in your cart. Total price: {totalPrice.toFixed(2)}€</Button>
                <Button variant="danger" onClick={() => this.emptyCart()}>Empty cart</Button>
              </Col>
              <Col sm="12"><Link to="/payement"><Button variant="primary">Proceed to payement</Button></Link></Col>
            </Row>
          </Col>
        </Row>
        <Footer/>
        </>
    );
  }
}

export default Cart;