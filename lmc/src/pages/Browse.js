

import React, {
    Component, useRef
} from 'react';
import { Row, Col, Spinner, Navbar, Container, FormControl, Button, Nav } from "react-bootstrap";
import SearchNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'
import Article from "../components/ArticleCard";
import { Link } from 'react-router-dom';

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
    
    // handleChange = (e, search) => {
    //     e.preventDefault()
    //     let name = e.target.name
    //     this.setState({
    //         [name]: e.target.value
    //     })
    // }

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
        // const childRef = useRef(null);

        this.setState({                              
            articles: articles,
            loading: false,

        });
    }
    render() {

        const inputValueInNavbar = inputSearch => {console.log(inputSearch)}

        if(this.props.loading){
            return <Spinner animation="grow"/>
        }
        
        // console.log(this.props)
        let showSearchArticles = []
        if(this.state.articles.data){
            showSearchArticles = this.state.articles.data.filter(
                article =>article.attributes.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
        }

        return (
            <>
                {/* <SearchNavbar onChange={inputValueInNavbar} showSearch={false}  /> */}
                <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className=""><Link className="text-light" to="/">Le Mauvais Coin</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    {
                        // this.props.showSearch && this.props.showSearch ? 
                        <div className="d-flex me-auto my-2 my-lg-0">
                            <FormControl
                            type="text"
                            name="search"   
                            className="me-2 textInput input-color-white"
                            placeholder="Recherchez un article..."
                            aria-label="Rechercher"
                            value={this.state.search}
                            onChange={(e) =>this.handleChange(e)}
                            />
                            <Button type="submit" variant="outline-success" className="me-auto my-2 my-lg-0" onClick={()=>this.onSubmit()}>Rechercher</Button>
                        </div>
                        // :null
                    }
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="d-flex"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >:
                        <Link className="hover-light padding-top-bot text-light" to="/browse">Articles</Link>
                        <Link className="hover-light padding-top-bot text-light" to="/cart">Panier</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Row>
                    <Col sm="2" /><Col sm="8">
                        <Row>
                        {/* {this.state.articles.data && this.state.articles.data.map((article, i) => 
                            <Article addArticleToCart={this.props.addArticleToCart} remArticleFromCart={this.props.remArticleFromCart} getNumberOfArticle={this.props.getNumberOfArticle} data={article} />)} */}
                            {showSearchArticles && showSearchArticles.map((article, i) => 
                            <Article addArticleToCart={this.props.addArticleToCart} remArticleFromCart={this.props.remArticleFromCart} getNumberOfArticle={this.props.getNumberOfArticle} data={article} />)}
                        </Row>
                    </Col>
                </Row>
                <Footer/>          
            </>
        );
    }
}
export default Browse;