import { Component } from "react";
import { Button, Card, Col, Placeholder } from "react-bootstrap";
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
    if (this.props.placeholder) {
      return (
        <>   {/* Placeholder loading card */}
        <Col sm="6" md="4" lg="3" >
          <Card style={{ width: '18rem' }}>
            <div className="cardImg">
              <Card.Img variant="top" src="https://horizondatasys.com/wp-content/uploads/2018/01/Dark-Gray-Square-300x300.png" />
            </div>
            <Card.Body>
              <Placeholder as={Card.Title} animation="wave">
                <Placeholder xs={4} /> <Placeholder xs={7} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="wave">
                <Placeholder xs={3} />
              </Placeholder>
              <div className="oneButton">
                <Placeholder.Button variant="primary" xs={12} />
              </div>
              <div className="oneButton">
                <Placeholder.Button variant="info" xs={12} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        </>
      )
    }


    return (
          <>  {/* Article Card */}
          <Col sm="12" md="6" lg="3" >
            <Card>
              <Link to={"/article/"+this.props.data.id}>
                <div className="cardImg">
                  <Card.Img fluid="true" variant="top" src={this.props.data.attributes.Image && "http://localhost:1337"+this.props.data.attributes.Image.data.attributes.url} />
                </div>
              </Link>
                <Card.Body>
                    <Card.Title>{this.props.data.attributes.name}</Card.Title>
                  <Card.Text>
                      {(this.props.data.attributes.price/100).toFixed(2)+"€"}
                  </Card.Text>
                      {this.props.viewFromCart ?
                        <>   {/* Buttons in cart */}
                        <div className="oneButton">
                          <Button variant="success" disabled> 
                            {this.props.getNumberOfArticle(this.props.data)} in the cart
                            ({(this.props.data.attributes.price * this.props.getNumberOfArticle(this.props.data) /100).toFixed(2)}€)
                            </Button>
                        </div>
                        <div className="twoButtons">
                          <Button variant="primary" onClick={() => this.props.addArticleToCart(this.props.data)}>Add one</Button>
                          <Button variant="primary" disabled={this.props.getNumberOfArticle(this.props.data) === 1} onClick={() => this.props.remArticleFromCart(this.props.data)}>Remove one</Button>
                        </div>
                        <div className="oneButton">
                          <Button variant="danger" onClick={() => this.remAllFromCart()}>Remove all</Button>
                        </div>
                        </>
                      : <>{this.state.inCart ?
                        <>   {/* Buttons after "add to cart" pressed */}
                          <div className="oneButton">
                            <Link to="/cart"><Button variant="success">Added to Cart - Show Cart</Button></Link>
                          </div>
                          <div className="oneButton">
                            <Button variant="danger" onClick={() => this.remFromCart()}>Cancel</Button>
                          </div>
                        </>
                        : <> {/* Default buttons */}
                          <div className="oneButton">
                            <Button variant="primary" onClick={() => this.addToCart()}>Add to Cart</Button>
                          </div>
                          <div className="oneButton">
                            <Link to={"/article/"+this.props.data.id}><Button variant="info">Show description</Button></Link>
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
