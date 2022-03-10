import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/Navbar.css"


class SearchNavbar extends Component {
    
    render() {        
        return (
            <>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className=""><Link className="text-light" to="/">Le Mauvais Coin</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="d-flex"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className="hover-light padding-top-bot text-light" to="/browse">Articles</Link>
                        <Link className="hover-light padding-top-bot text-light" to="/cart">Panier</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }

} export default SearchNavbar