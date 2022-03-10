import { Button, Card, Col, Figure, ListGroup, ListGroupItem, Placeholder, Row } from "react-bootstrap";
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
        }), 500);
    }

    render() {

    return (
        <>  
            <MyNavbar/>
            {this.state.loading ? 
            <>
            <div className="min-height main text-center">
                
            <p aria-hidden="true">
                    <div className="text-center cardPageImg">
                        <Card.Img style={{height: this.state.article.data ? this.state.article.data.attributes.Image.data.attributes.formats.thumbnail.height :null}} variant="top" src="https://horizondatasys.com/wp-content/uploads/2018/01/Dark-Gray-Square-300x300.png" />
                    </div>
                    <Placeholder as={Card.Text} animation="wave">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="wave">
                        <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="wave">
                        <Placeholder xs={8} />
                    </Placeholder>

            </p>
          
            {/* <Placeholder.Button xs={4} aria-hidden="true" /> */}
            </div>
            </>
            :null}
            { this.state.article.data ? 
            <> 
                    
        
                <Row  className="main min-height text-align-center">
                        <Col lg="3" sm="0" />
                        <Col lg="6" sm="0">
                            <>
                                <Card className="max-width">
                                    <Card.Img variant="top" src={"http://localhost:1337"+this.state.article.data.attributes.Image.data.attributes.url} alt="Image didn't loaded properly"/>
                                    <Card.Body>
                                        <Card.Title>{this.state.article.data.attributes.name}</Card.Title>
                                        <Card.Text>
                                    {this.state.article.data.attributes.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>{(this.state.article.data.attributes.price/100).toFixed(2)+"€"}</ListGroupItem>
                                        {this.props.viewFromCart ?
                                        <>
                                            <div className="oneButton">
                                                <Button variant="success" disabled> 
                                                {this.props.getNumberOfArticle(this.state.article.data)} in the cart
                                                ({(this.state.article.data.attributes.price * this.props.getNumberOfArticle(this.state.article.data) /100).toFixed(2)}€)
                                                </Button>
                                            </div>
                                            <div className="twoButtons">
                                                <Button variant="primary" onClick={() => this.props.addArticleToCart(this.state.article.data)}>Add one</Button>
                                                <Button variant="primary" disabled={this.props.getNumberOfArticle(this.state.article.data) === 1} onClick={() => this.props.remArticleFromCart(this.state.data)}>Remove one</Button>
                                            </div>
                                            <div className="oneButton">
                                                <Button variant="danger" onClick={() => this.remAllFromCart()}>Remove all</Button>
                                            </div>
                                        </>
                                        : <>
                                            {this.state.article.inCart ?
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
                                                        <Link to={"/"}><Button variant="info">Back to menu</Button></Link>
                                                    </div>
                                                    </>
                                            }
                                        </>
                                        }
                                    </ListGroup>
                                </Card>
                                </>
                            </Col>
                    <Col lg="3" sm="0" />
                </Row>
                    </>
                    :null
            }
            <div className="bottom">
                <Footer/>
            </div>
        </>





        )
    }
} export default ArticlePage;


