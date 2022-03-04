import { Component } from "react";
import { Button, Card, } from "react-bootstrap";

import { Link } from "react-router-dom";

class Article extends Component {
  constructor(props) {
      super(props)
      this.state = {
          inCart: false
      }
  }
  addToCart = () => {
    this.setState({inCart:true})
    this.props.addArticleToCart(this.props.article)
  }
  render() {
    return (
          <>
          {/* <Card
            actions={[
                this.state.inCart ? <Link to="/cart">Ajouté - Voir le panier</Link> : <Button onClick={() => this.addToCart()}>Ajouter au panier</Button>
            ]}
            header={<CardTitle image="https://bootstrapcss.com/images/sample-1.jpg">{this.props.data.attributes.name}</CardTitle>}
        >
            {this.props.data.attributes.description}
        </Card> */}
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://bootstrapcss.com/images/sample-1.jpg" />
                <Card.Body>
                    <Card.Title>{this.props.data.attributes.name}</Card.Title>
                    <Card.Text>
                        {this.props.data.attributes.description}
                    </Card.Text>
                    {[this.state.inCart ? <Link to="/cart"><Button variant="success">Added to Cart - Show Cart</Button></Link> : <Button variant="primary" onClick={() => this.addToCart()}>Add to Cart</Button>]}
                </Card.Body>
            </Card>
            </>
    );
  }
}

export default Article;
