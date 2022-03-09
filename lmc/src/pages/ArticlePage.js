// One page per article LOOL (more pain to do)

import { Component } from "react/cjs/react.production.min";


class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           inCart: this.props.inCart,
           loading: true
        }
    }

    async componentDidMount() {
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        const response = await fetch('http://localhost:1337/api/articles/?populate=category',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
         
    }

    
} export default ArticlePage;


