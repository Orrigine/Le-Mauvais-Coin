import React, {
    Component
} from 'react';
import { Row, Col } from "react-materialize";
import 'materialize-css';
import MyNavbar from '../components/MyNavbar'
import 'materialize-css/dist/css/materialize.min.css'

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
            <MyNavbar />
        <Row>
          <Col l={3} m={6} s={12}>
            {this.state.articles.data && this.state.articles.data.map((article, i) => <Article addArticleToCart={this.props.addArticleToCart} data={article} />)};
        </Col>
      </Row>
    </>
        );
    }
}
export default Browse;