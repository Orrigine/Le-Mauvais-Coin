import React, {
    Component
} from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/Footer.css"

class Footer extends Component {
    constructor(props) { 
        super(props)
        this.state = {

        };
    }
    render() {
        return (

            <>
            <Card className="text-center back-in-black">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title className="text-light">Special title treatment</Card.Title>
                    <Card.Text className="text-light text-muted">
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="light">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">© 2020-2022 Le Mauvais Coin</Card.Footer>
            </Card>
        </>
        )
    }
} export default Footer