import React, {
    Component
} from 'react';
import MyNavbar from '../components/MyNavbar'
import { Divider, Dropdown, Icon, Navbar, NavItem } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css'

import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <>
            <MyNavbar />
            
            <h1> Bi1venue sur Le Mauvais Coin ! </h1>
            <div>
                <Link to="/browse"> Nos articles ! </Link>
                <Link to="/account"> Votre compte </Link>
                <Link to="/cart"> Panier </Link>
            </div>
            </>

        );
    }
}

export default Home;