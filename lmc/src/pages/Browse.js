import React, {
    Component,
} from 'react';
import { Row, Col, Navbar, Container, FormControl, Nav } from "react-bootstrap";
import Footer from '../components/Footer'
import Article from "../components/ArticleCard";
import { Link } from 'react-router-dom';
import '../css/Browse.css'
class Browse extends Component {    

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            search:'',
        }
    }

    
    onSubmit = (event) => {
        console.log(this.state.search);
    }   

    handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value})
        console.log()
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:1337/api/articles?populate=*', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const articles = await response.json()

        setTimeout(() => this.setState({                              
            articles: articles,
            loading: false
        }), 500);
    }
    render() {

        const placeholderNumber = [0,0,0,0,0,0,0]

        let showSearchArticles = []
        if(this.state.articles.data){
            showSearchArticles = this.state.articles.data.filter(
                article =>article.attributes.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
        }

        return (
            <> {/* Special navbar with search field */}
                <Navbar className="fixed-top" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className=""><Link className="text-light" to="/">Le Mauvais Coin</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className="d-flex me-auto my-2 my-lg-0 ">
                            <FormControl
                            type="text"
                            name="search"   
                            className="me-2 textInput input-color-white"
                            placeholder="Recherchez un article..."
                            aria-label="Rechercher"
                            value={this.state.search}
                            onChange={(e) =>this.handleChange(e)}
                            />
                        </div>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="d-flex"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className="hover-light padding-top-bot text-light" to="/">Articles</Link>
                        <Link className="hover-light padding-top-bot text-light" to="/cart">Panier</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>

                <Row className="main">  {/* Articles display */}
                    <Col sm="2" /><Col sm="8">
                        <Row>
                            {this.state.loading ?
                                placeholderNumber.map(() => <Article placeholder={true} />)
                                : showSearchArticles && showSearchArticles.map((article) => <Article key={article.id.toString()} addArticleToCart={this.props.addArticleToCart} remArticleFromCart={this.props.remArticleFromCart} getNumberOfArticle={this.props.getNumberOfArticle} data={article} />)}
                        </Row>
                    </Col>
                </Row>
                <Footer/> 
            </>
        );
    }
}
export default Browse;