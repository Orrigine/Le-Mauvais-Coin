import React, {
    Component
} from 'react';
import SearchNavbar from '../components/MyNavbar'
import Footer from '../components/Footer'

class Account extends Component {
    render() {
        return ( 
        <>
        <SearchNavbar/> 
        <p> Votre compte sur le mauvais coin:
            </p>
        <Footer/>
        </>

        );
    }
}

export default Account;