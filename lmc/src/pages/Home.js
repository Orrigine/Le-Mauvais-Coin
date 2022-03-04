import React, {
    Component
} from 'react';
import SearchNavbar from '../components/MyNavbar'

import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <>
            <SearchNavbar />
            
            <h1> Bi1venue sur Le Mauvais Coin ! </h1>
            <div>
                <Link to="/browse"> Nos articles ! </Link>
                <Link to="/cart"> Panier </Link>
            </div>
            </>

        );
    }
}

export default Home;