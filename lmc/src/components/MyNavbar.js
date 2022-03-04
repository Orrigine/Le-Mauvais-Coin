import React, {
    Component
} from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';





class SearchNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            search: ''
        };
    }

    onSubmit = () => {
        console.log(this.state.search);
      };

    render() {
        return (
            <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><Link to="/browse"> Nos articles ! </Link></Nav.Link>
                        <Nav.Link><Link to="/account"> Votre compte </Link></Nav.Link>
                        <Nav.Link><Link to="/cart"> Panier </Link></Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="Rechercher"
                        className="me-2 textInput"
                        placeholder="Recherchez un article..."
                        aria-label="Rechercher"
                        value={this.state.search}
                        onChange={event => this.setState({search: event.target.value})}
                        />
                        <Button variant="outline-success" className="buttonSendInput" onClick={this.onSubmit}>Rechercher</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            </>
        )
    }

} export default SearchNavbar