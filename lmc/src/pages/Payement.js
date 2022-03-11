import React, { Component } from 'react';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'
import { Row, Col, Alert, Button, InputGroup, FormControl, Form } from "react-bootstrap";

import { Link } from 'react-router-dom';
import "../css/Payement.css"


class Payement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            lastname:'',
            firstname:'',
            adress:'',
            date:'',
            CVC:'',
            RIB:'',
            
            
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value})
    }

    saveToLocalStorage = () => {
        localStorage.setItem('order', JSON.stringify(this.props.cart))
        localStorage.setItem('customerInfo', JSON.stringify({email:this.state.email,
        lastname:this.state.lastname,
        firstname:this.state.firstname,
        adress:this.state.adress,
        date:this.state.date,
    }))
    // this.props.cart = [];
        // console.log(localStorage);
    }
    
    // remAllFromCart() {
    //     this.setState({inCart:false});
    //     const initialNumber = this.props.getNumberOfArticle(this.state.article.data)
    //     for (let i = 0; i < initialNumber; i++) {
    //       this.props.remArticleFromCart(this.state.article.data);
    //     }
    //   }

    render() {
        return (
            <> 
            <MyNavbar/>
            <Row className="main min-height">
                <Col sm="1" lg="3"></Col>
                <Col sm="10" lg="6">

                
                        <Form.Floating className="white mb-3">
                            <Form.Control className="text-ligth"
                            id="floatingInputCustom"
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            value={this.state.email}
                            onChange={(e) =>this.handleChange(e)}
                            />
                            <label htmlFor="floatingInputCustom">Adresse mail</label>
                        </Form.Floating>

                        <Row>
                            <Col sm="6" lg="6">
                                <Form.Floating className="white mb-3">
                                    <Form.Control
                                    id="floatingInputCustom"
                                    type="text"
                                    name='firstname'
                                    placeholder="name@example.com"
                                    value={this.state.firstname}
                                    onChange={(e) =>this.handleChange(e)}
                                    />
                                    <label htmlFor="floatingInputCustom">Prénom</label>
                                </Form.Floating>
                            </Col>
                            <Col sm="6" lg="6">
                                <Form.Floating className="white mb-3">
                            <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            name='lastname'
                            placeholder="name@example.com"
                            value={this.state.lastname}
                            onChange={(e) =>this.handleChange(e)}
                            />
                            <label htmlFor="floatingInputCustom">Nom de Famille</label>
                        </Form.Floating>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col lg="4" sm="4">
                                <Form.Floating className="white mb-3">
                                
                                    <Form.Control
                                    id="floatingPasswordCustom"
                                    value={this.state.RIB}
                                    name='RIB'
                                    type="number"
                                    onChange={(e) =>this.handleChange(e)}
                                    placeholder="Numéro de Carte"
                                    pattern="[0-9]*"
                                    />
                                    <label htmlFor="floatingPasswordCustom">Numéro de Carte</label>
                                </Form.Floating>
                            </Col>
                            <Col lg="4" sm="4">
                            <Form.Floating className="white mb-3">
                                
                                    <Form.Control
                                    id="floatingPasswordCustom"
                                    value={this.state.date}
                                    onChange={(e) =>this.handleChange(e)}
                                    type="text"
                                    name='date'
                                    placeholder="Date commande"
                                    pattern="[0-9]*"
                                    />
                                    <label htmlFor="floatingPasswordCustom">Date commande</label>
                                </Form.Floating>
                            </Col>
                            <Col lg="4" sm="4">
                            <Form.Floating className="white mb-3">
                                
                                    <Form.Control
                                    id="floatingPasswordCustom"
                                    value={this.state.CVC}
                                    type="number"
                                    name='CVC'
                                    onChange={(e) =>this.handleChange(e)}
                                    placeholder="Numéro de Carte"
                                    pattern="[0-9]*"
                                    />
                                    <label htmlFor="floatingPasswordCustom">Code de Validation</label>
                                </Form.Floating>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" lg="12">
                            
                                <Form.Floating className="white mb-3">
                                    <Form.Control
                                    id="floatingInputCustom"
                                    type="text"
                                    name='adress'
                                    placeholder="name@example.com"
                                    value={this.state.adress}
                                    onChange={(e) =>this.handleChange(e)}
                                    />
                                    <label htmlFor="floatingInputCustom">Adresse</label>
                                </Form.Floating>
                            </Col>
                        </Row>
                        <Link to="/"><Button onClick={this.saveToLocalStorage()} variant="info">Valider la commande</Button></Link>
                </Col>
                    
            </Row>
            <Footer/>

                        
            
            
            
            </>
        )
    }
}
export default Payement;