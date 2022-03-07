import React, { Component } from 'react';
import { Button, Container, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/Navbar.css"


class SearchNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            search: ''
        };
    }
    render() {
        return (
            <>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-light"><Link to="/">Le Mauvais Coin</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    {
                        this.props.showSearch && this.props.showSearch ? 
                        <div className="d-flex me-auto my-2 my-lg-0">
                            <FormControl
                            type="search"
                            className="me-2 textInput"
                            placeholder="Recherchez un article..."
                            aria-label="Rechercher"
                            value={this.state.search}
                            onChange={event => this.setState({search: event.target.value})}
                            />
                            <Button type="submit" variant="outline-success" className="me-auto my-2 my-lg-0" onClick={()=>this.onSubmit()}>Rechercher</Button>
                        </div>
                        :null
                    }
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="d-flex"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >:
                        <Nav.Link className="text-light hover-light"><Link to="/browse"> Articles </Link></Nav.Link>
                        <Nav.Link className="text-light hover-light"><Link to="/cart"> Panier </Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }

} export default SearchNavbar