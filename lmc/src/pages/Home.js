import React, {
    Component
} from 'react';
import SearchNavbar from '../components/MyNavbar'

import {Link} from 'react-router-dom';
import Footer from '../components/Footer'
import { Row, Col } from "react-bootstrap";


class Home extends Component {
    render() {
        return (
            <>
            <SearchNavbar />
            <Row>
                <Col sm="2" /><Col sm="8">
            <h1> Bi1venue sur Le Mauvais Coin ! </h1>
            <div>
                <Link to="/browse"> Nos articles ! </Link>
                <Link to="/cart"> Panier </Link>
            </div>
                </Col>
            </Row>
            <Footer/>
            </>

        );
    }
}

export default Home;