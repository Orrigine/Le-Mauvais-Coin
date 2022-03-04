import React, {
    Component
} from 'react';
import { Button, Container, Divider, Dropdown, Form, FormControl, Icon, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
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
        <Link to={this.state.search}></Link>
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
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        className="me-2 textInput"
                        placeholder="Search..."
                        aria-label="Search"
                        value={this.state.search}
                        onChange={event => this.setState({search: event.target.value})}
                        />
                        <Button variant="outline-success" className="buttonSendInput" onClick={this.onSubmit}>Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            </>
        )
    }

} export default SearchNavbar