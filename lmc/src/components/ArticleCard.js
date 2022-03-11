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

  remAllFromCart() {
    this.setState({inCart:false});
    const initialNumber = this.props.getNumberOfArticle(this.props.data)
    for (let i = 0; i < initialNumber; i++) {
      this.props.remArticleFromCart(this.props.data);
    }
  }

  CardButtons() {
    let firstLine;
    let secondLine;
    let thirdLine;

    if (this.props.viewFromCart) { /* Buttons in cart */
      firstLine = <>
        <Button variant="success" disabled={true}> 
          {this.props.getNumberOfArticle(this.props.data)} in the cart
          ({(this.props.data.attributes.price * this.props.getNumberOfArticle(this.props.data) /100).toFixed(2)}€)
        </Button>
      </>;
      secondLine = <>
        <Button variant="primary" onClick={() => this.props.addArticleToCart(this.props.data)}>Add one</Button>
        <Button variant="primary" disabled={this.props.getNumberOfArticle(this.props.data) === 1} onClick={() => this.props.remArticleFromCart(this.props.data)}>Remove one</Button>
      </>;
      thirdLine = <>
        <Button variant="danger" onClick={() => this.remAllFromCart()}>Remove all</Button>
      </>;
    }
    else if (this.props.getNumberOfArticle(this.props.data) !== 0) { /* Buttons after "add to cart" pressed */
        firstLine = <>
          <Link to="/cart"><Button variant="success">Added to Cart - Show Cart</Button></Link>
        </>;
        thirdLine = <>
          <Button variant="danger" onClick={() => this.remAllFromCart(this.props.data)}>Remove from cart</Button>
        </>;
    }
    else { /* Default buttons */
        firstLine = <>
          <Button variant="primary" onClick={() => this.props.addArticleToCart(this.props.data)}>Add to Cart</Button>
        </>;
        thirdLine = <>
          <Link to={"/article/"+this.props.data.id}><Button variant="info">Show description</Button></Link>
        </>;
    }
    return (
      <>
        <div className="firstLine"> {firstLine} </div>
        <div className="secondLine">{secondLine}</div>
        <div className="thirdLine"> {thirdLine} </div>
      </>
    )
  }

  render() {
    if (this.props.placeholder) {
      return (
        <>   {/* Placeholder loading card */}
        <Col sm="6" md="4" lg="3" >
          <Card className="singleCard">
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
              <div className="firstLine">
                <Placeholder.Button variant="primary" xs={12} />
              </div>
              <div className="thirdLine">
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
            <Card className="grey singleCard">
              <Link to={"/article/"+this.props.data.id}>
                <div className="cardImg">
                  <Card.Img variant="top" src={this.props.data.attributes.Image && "http://localhost:1337"+this.props.data.attributes.Image.data.attributes.url}  alt="Image didn't loaded properly"/>
                </div>
              </Link>
                <Card.Body>
                    <Card.Title className="text-light">{this.props.data.attributes.name}</Card.Title>
                  <Card.Text className="text-light">
                      {(this.props.data.attributes.price/100).toFixed(2)+"€"}
                  </Card.Text>
                  {this.CardButtons()}
              </Card.Body>
            </Card>
          </Col>
          </>
    );
  }
}

export default Article;
