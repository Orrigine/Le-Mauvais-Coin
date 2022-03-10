import { Component } from "react/cjs/react.production.min";


class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           loading: true
        }
    }

    async componentDidMount() {
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        const response = await fetch('http://localhost:1337/api/articles/'+id+'/?populate=category',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        this.setState({
            article: await response.json(),
            loading: false
        })
    }

    render() {
        return (

            <p>{this.state.article}</p>

        )
    }
} export default ArticlePage;


