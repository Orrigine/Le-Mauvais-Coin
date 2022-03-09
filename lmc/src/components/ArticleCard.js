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
  remAllFromCart() {
    this.setState({inCart:false});
    const initialNumber = this.props.getNumberOfArticle(this.props.data)
    for (let i = 0; i < initialNumber; i++) {
      this.props.remArticleFromCart(this.props.data);
    }
  }
  render() {
    return (
          <>
          <Col sm="6" md="4" lg="3" >
            <Card>
              <Link to={"/article/"+this.props.data.id}>
                <div className="cardImg">
                  <Card.Img variant="top" src={this.props.data.attributes.Image && "http://localhost:1337"+this.props.data.attributes.Image.data.attributes.url} />
                </div>
              </Link>
                <Card.Body>
                    <Card.Title>{this.props.data.attributes.name}</Card.Title>
                  <Card.Text>
                      {this.props.data.attributes.price/100+"€"}
                  </Card.Text>
                      {this.props.viewFromCart ?
                        <>
                        <div class="oneButton">
                          <Button variant="success" disabled>In cart: {this.props.getNumberOfArticle(this.props.data)}</Button>
                        </div>
                        <div class="twoButtons">
                          <Button variant="primary" onClick={() => this.props.addArticleToCart(this.props.data)}>Add one</Button>
                          <Button variant="primary" disabled={this.props.getNumberOfArticle(this.props.data) === 1} onClick={() => this.props.remArticleFromCart(this.props.data)}>Remove one</Button>
                        </div>
                        <div class="oneButton">
                          <Button variant="danger" onClick={() => this.remAllFromCart()}>Remove all</Button>
                        </div>
                        </>
                      : <>{this.state.inCart ?
                        <>
                          <div class="oneButton">
                            <Button variant="success"><Link to="/cart">Added to Cart - Show Cart</Link></Button>
                          </div>
                          <div class="oneButton">
                            <Button variant="danger" onClick={() => this.remFromCart()}>Cancel</Button>
                          </div>
                        </>
                        : <>
                          <div className="oneButton">
                            <Button variant="primary" onClick={() => this.addToCart()}>Add to Cart</Button>
                          </div>
                          <div className="oneButton">
                            <Button variant="info"><Link to={"/article/"+this.props.data.id}>Show description</Link></Button>
                          </div>
                        </>
                        } </>
                      }
              </Card.Body>
            </Card>
          </Col>
          </>
    );
  }
}

export default Article;
