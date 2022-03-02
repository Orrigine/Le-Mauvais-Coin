import React, {
    Component
} from 'react';
import {Link} from 'react-router-dom';


class Accueil extends Component {
    render() {
        return (
            <body>
                <h1> Bi1venue sur Le Mauvais Coin ! </h1>
            <div>
                <Link to="/browse"> Nos articles ! </Link>
                <Link to="/account"> Votre compte </Link>
                <Link to="/cart"> Panier </Link>
            </div>
            </body>

        );
    }
}

export default Accueil;