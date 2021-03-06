
import React, {
    Component
} from 'react';
import { Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import "../css/Footer.css"

class Footer extends Component {
    constructor(props) { 
        super(props)
        this.state = {

        };
    }
    render() {
        return (

            <>  {/*Links on the left */}
            <Row className="back-in-black">
                <Col lg='1' md='1' className='.d-sm-none .d-md-block'></Col>
                <Col lg="2" md="2" sm="12">
                    <Card.Body className="left">
                        <Col sm="12" md="12" lg="12">
                            <Card.Link href="/browse" className="text-muted">Hey</Card.Link>
                        </Col>
                        <Col sm="12" md="12" lg="12">
                            <Card.Link href="/browse" className="text-muted">Coucou</Card.Link>
                        </Col>
                        <Col sm="12" md="12" lg="12">
                            <Card.Link href="/browse" className="text-muted">Ca va ?</Card.Link>
                        </Col>
                    
                    </Card.Body>
                </Col>
                <Col lg='2' md='2' className='.d-sm-none .d-md-block'></Col>

                <Col lg="2" md="2" sm="12">  {/* Email form to newsletter */}
                    <Card.Body className="mid">
                        <Card.Title className="text-light">Rejoins Le Mauvais Coin</Card.Title>
                        <InputGroup className="mb-1">
                        
                            <FormControl
                            placeholder="Email"
                            aria-label="Username"
                            
                            className="back-in-black input-color-white"
                            />
                        </InputGroup>
                    </Card.Body>
                </Col>
                <Col lg='2' md='2' className='.d-sm-none .d-md-block'></Col>

                <Col lg="2" md="2" sm="12">  {/* Website description on the right */}
                    <Card.Body className="right">
                            <Card.Title className="text-light">Le Mauvais Coin</Card.Title>
                            <Card.Text className="text-light text-muted">
                            Le Mauvais Coin est un site satyrique qui a pour but de tourner en d??rision le site Le Bon Coin avec des articles d??cal??s et des descriptions atypiques. <br />
                           
                        </Card.Text>
                        
                    </Card.Body>
                </Col>
                <Col lg='1' md='1' className='.d-sm-none .d-md-block'></Col>
                
                <Card.Footer className="text-center text-muted">?? 2020-2022 Le Mauvais Coin</Card.Footer>
            </Row>
        </>
        )
    }
} export default Footer
