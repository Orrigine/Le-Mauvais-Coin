import React, {
    Component
} from 'react';
import SearchNavbar from '../components/MyNavbar'

import {Link} from 'react-router-dom';
import Footer from '../components/Footer'


class Home extends Component {
    render() {
        return (
            <>
            <SearchNavbar />
            
            <h1> Bi1venue sur Le Mauvais Coin ! </h1>
            <div>
                <Link to="/browse"> Nos articles ! </Link>
                <Link to="/account"> Votre compte </Link>
                <Link to="/cart"> Panier </Link>
            </div>
            <Footer/>
            </>

        );
    }
}

export default Home;