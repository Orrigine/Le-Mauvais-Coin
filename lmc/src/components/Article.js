import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import "../css/Article.css"

import { Link } from "react-router-dom";

class Article extends Component {
  constructor(props) {
      super(props)
      this.state = {
          inCart: false
      }
  }
  addToCart() {
    this.setState({inCart:true});
    this.props.addArticleToCart(this.props.article);
    console.log(this.props.data)
  }
  render() {
    //console.log(this.props.data.attributes.Image.data);
    return (
          <>
          <Col sm="6" md="4" lg="3" >
            <Card>
              <Card.Img style={{height:"15rem"}} variant="top" src={this.props.data.attributes.Image && "http://localhost:1337"+this.props.data.attributes.Image.data.attributes.url} />
              <Card.Body>
                  <Card.Title>{this.props.data.attributes.name}</Card.Title>
                  <Card.Text style={{height:"5rem"}}>
                      {this.props.data.attributes.description}
                  </Card.Text>
                  {[this.state.inCart ? <Link to="/cart"><Button variant="success">Added to Cart - Show Cart</Button></Link> : <Button variant="primary" onClick={() => this.addToCart()}>Add to Cart</Button>]}
              </Card.Body>
            </Card>
          </Col>
          </>
    );
  }
}

export default Article;
