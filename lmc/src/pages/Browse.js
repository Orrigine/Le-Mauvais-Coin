

import React, {
    Component
} from 'react';
import { Row, Col } from "react-bootstrap";
import SearchNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'
import Article from "../components/Article";

class Browse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
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
        this.setState({
            articles: articles
        });
    }
    render() {
        return (
            <>
                <SearchNavbar showSearch={true}  />
                <Row>
                    <Col sm="2" /><Col sm="8">
                        <Row>
                        {this.state.articles.data && this.state.articles.data.map((article, i) => 
                            <Article addArticleToCart={this.props.addArticleToCart} remArticleFromCart={this.props.remArticleFromCart} data={article} />)}
                        </Row>
                    </Col>
                </Row>
                <Footer/>            
            </>
        );
    }
}
export default Browse;