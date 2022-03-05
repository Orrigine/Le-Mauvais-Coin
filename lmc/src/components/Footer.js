import React, {
    Component
} from 'react';
import { Button, Card } from 'react-bootstrap';
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
                    <Card.Title className="text-light">Le Mauvais Coin</Card.Title>
                    <Card.Text className="text-light text-muted">
                    Le Mauvais Coin est un site satyrique qui a pour but de tourner en dérision le site Le Bon Coin avec des articles décalés et des descriptions atypiques. <br />
                    Plz payez en BitCOIN c'est la sauce pour les affaires avec le Covid.
                    </Card.Text>
                    <Button variant="light">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">© 2020-2022 Le Mauvais Coin</Card.Footer>
            </Card>
        </>
        )
    }
} export default Footer