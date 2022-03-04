import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom';

import {
    Button,
    Card,
    Row,
    Col
} from 'react-bootstrap';
import SearchNavbar from '../components/MyNavbar'


class Account extends Component {
    render() {
        return ( 
        <>
        <SearchNavbar/> 
        <p> Votre compte sur le mauvais coin:
            </p>
        </>

        );
    }
}

export default Account;