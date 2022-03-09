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
                    <Navbar.Brand className=""><Link className="text-light" to="/">Le Mauvais Coin</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    {
                        this.props.showSearch && this.props.showSearch ? 
                        <div className="d-flex me-auto my-2 my-lg-0">
                            <FormControl
                            type="text"
                            name="search"   
                            className="me-2 textInput input-color-white"
                            placeholder="Recherchez un article..."
                            aria-label="Rechercher"
                            value={this.props.search}
                            onChange={(e) =>this.handleChange(e)}
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