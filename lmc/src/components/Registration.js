import React, { Component } from 'react';

export default class Registration extends Component {
    state = {
        user: '',
        rememberMe: false
    };

    handleChgange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.SetState({ [input.name]: value})
    };

    handleForSubmit = (event) => {
        const { user, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
    }

    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('user') : '';
        this.setState({ user, rememberMe })
    }

    render() {
        return (
        <>
            
        </>
        );
    }

}