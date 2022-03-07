import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Article.css"

class Article extends Component {
  constructor(props) {
      super(props)
      this.state = {
          inCart: this.props.inCart
      }
  }
  addToCart() {
    this.setState({inCart:true});
    this.props.addArticleToCart(this.props.data);
  }
  remFromCart() {
    this.setState({inCart:false});
    this.props.remArticleFromCart(this.props.data);
  }
  render() {
    //console.log(this.props.data.attributes.Image.data);
    return (
          <>
          <Col sm="6" md="4" lg="3" >
            <Card>
              <Card.Img variant="top" src={this.props.data.attributes.Image && "http://localhost:1337"+this.props.data.attributes.Image.data.attributes.url} />
              <Card.Body>
                  <Card.Title>{this.props.data.attributes.name}</Card.Title>
                  <Card.Text>
                      {this.props.data.attributes.description}
                  </Card.Text>
                  {this.state.inCart ? 
                    <>
                      {this.props.inCart ?
                      <>
                        <Button variant="primary" onClick={() => this.addToCart()}>One more!</Button>
                        <Button variant="primary" onClick={() => this.remFromCart()}>One less!</Button>
                      </>
                      : <>
                        <Button variant="success"><Link to="/cart">Added to Cart - Show Cart</Link></Button>
                        <Button variant="primary" onClick={() => this.remFromCart()}>Cancel</Button>
                      </>}
                    </>
                    : <Button variant="primary" onClick={() => this.addToCart()}>Add to Cart</Button>}
              </Card.Body>
            </Card>
          </Col>
          </>
    );
  }
}

export default Article;
