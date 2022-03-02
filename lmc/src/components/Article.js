import { Component } from "react";
import { Button, Card, CardTitle } from "react-materialize";
import 'materialize-css';
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
          <Card
            actions={[
              this.state.inCart ? <Link to="/cart" >Ajouté - Voir le panier</Link> : <Button onClick={()=>this.addToCart()}>Ajouter au panier</Button>
            ]}
            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{this.props.data.attributes.name}</CardTitle>}
          >
            {this.props.data.attributes.description}
          </Card>
    );
  }
}

export default Article;