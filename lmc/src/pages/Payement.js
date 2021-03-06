import React, { Component } from 'react';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer'
import { Row, Col, Alert, Button } from "react-bootstrap";
import Article from "../components/ArticleCard";
import { Link } from 'react-router-dom';
import "../css/Payement.css"
import { Form } from 'react-bootstrap';


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
    async componentDidMount() {
        const response = await fetch('http://localhost:1337/api/articles/?populate=*',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    }

    saveToLocalStorage = () => {
        localStorage.setItem('order', JSON.stringify(this.props.cart))
        localStorage.setItem('customerInfo', JSON.stringify({email:this.state.email,
        lastname:this.state.lastname,
        firstname:this.state.firstname,
        adress:this.state.adress,
        date:this.state.date,
        }))
    }
        
    sendToDB = async (req, res) => {
        const response = await fetch("http://localhost:1337/api/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body:JSON.stringify({
                data:{
                    email:this.state.email,
                    last_name:this.state.lastname,
                    first_name:this.state.firstname,
                    adress:this.state.adress,
                    date:this.state.date,
                    articles:this.props.cart,
                }
            }),
        });
    }


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
                                    <label htmlFor="floatingInputCustom">Pr??nom</label>
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
                                    placeholder="Num??ro de Carte"
                                    pattern="[0-9]*"
                                    />
                                    <label htmlFor="floatingPasswordCustom">Num??ro de Carte</label>
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
                                    placeholder="Num??ro de Carte"
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
                        <Link to="/"><Button onClick={this.sendToDB()} variant="info">Valider la commande</Button></Link>
                </Col>
                    
            </Row>
            <Footer/>

                        
            
            
            
            
            
            </>
        )
    }
}
export default Payement;