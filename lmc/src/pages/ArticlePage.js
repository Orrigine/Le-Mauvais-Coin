import { Button, Card, Col, ListGroup, ListGroupItem, Placeholder, Row } from "react-bootstrap";
import { Component } from "react/cjs/react.production.min";
import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import "../css/Article.css";
import { Link } from "react-router-dom";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    article:  [],
    loading: true
    }
  }

  async componentDidMount() {
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    const response = await fetch('http://localhost:1337/api/articles/'+id+'/?populate=*',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const article = await response.json();
    
    setTimeout(() => this.setState({
      article: article,
      loading: false
    }), 200);
  }

  remAllFromCart() {
    this.setState({inCart:false});
    const initialNumber = this.props.getNumberOfArticle(this.state.article.data)
    for (let i = 0; i < initialNumber; i++) {
      this.props.remArticleFromCart(this.state.article.data);
    }
  }
 
  CardButtons() {
    let firstLine;
    let secondLine;
    let thirdLine;

    if (this.props.getNumberOfArticle(this.state.article.data) !== 0) { /* Buttons after "add to cart" pressed */
    firstLine = <>
      <Link to="/cart"><Button variant="success">Added to Cart - Show Cart</Button></Link>
    </>;
    secondLine = <>
      <Button variant="danger" onClick={() => this.remAllFromCart()}>Remove from cart</Button>
      <Link to="/"><Button variant="info">Back to main page</Button></Link>
    </>;
    }
    else { /* Default buttons */
      firstLine = <>
        <Button variant="primary" onClick={() => this.props.addArticleToCart(this.state.article.data)}>Add to Cart</Button>
      </>;
      thirdLine = <>
        <Link to="/"><Button variant="info">Back to main page</Button></Link>
      </>;
    }
    return (
      <>
        <div className="firstLine"> {firstLine} </div>
        <div className="secondLine"> {secondLine} </div>
        <div className="thirdLine"> {thirdLine} </div>
      </>
    )
  }

  render() {
    if (this.state.loading) {
      return (
        <>
          <MyNavbar/>
          <Row className="main articlePage">
            <Col lg="3" sm="0" />
            <Col lg="6" sm="0">
              <Card>
                <Card.Img variant="top" src="https://horizondatasys.com/wp-content/uploads/2018/01/Dark-Gray-Square-300x300.png" />
                <Card.Body>
                  <Card.Title>
                    <Placeholder as={Card.Title} animation="wave">
                      <Placeholder xs={7} /> <Placeholder xs={4} />
                    </Placeholder>
                  </Card.Title>
                  <Placeholder as={Card.Text} animation="wave">
                    <Placeholder xs={3} />
                  </Placeholder>
                  <Placeholder.Button className="firstLine" variant="primary" xs="12" />
                  <Placeholder.Button className="thirdLine" variant="info" xs="12" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Footer />
        </>
      )
    }

    return (
      <>
      <MyNavbar />
        <Row  className="main articlePage">
          <Col lg="3" sm="0" />
          <Col lg="6" sm="0">
            <Card>
              <div className="cardImg">
                {console.log(this.state.article.data)}
                <Card.Img variant="top" src={"http://localhost:1337"+this.state.article.data.attributes.Image.data.attributes.url} alt="Image didn't loaded properly"/>
              </div>
              <Card.Body>
                <Card.Title>{this.state.article.data.attributes.name}</Card.Title>
                <Card.Text>
                  <div className="description">{this.state.article.data.attributes.description}</div>
                  <div className="price">{(this.state.article.data.attributes.price/100).toFixed(2)+"€"}</div>
                </Card.Text>
                {this.CardButtons()}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Footer/>
    </>
    )
  }
} export default ArticlePage;
