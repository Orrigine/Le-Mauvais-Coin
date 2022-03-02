import React, {
    Component
} from 'react';
import 'materialize-css';
import MyNavbar from '../components/MyNavbar'
import 'materialize-css/dist/css/materialize.min.css'


class Browse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:1337/api/articles?populate=*', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const articles = await response.json()
        this.setState({
            articles: articles
        });
    }
    render() {
        
        return (
            <>
            <MyNavbar />
            <ul>
                {this.state.articles.data && this.state.articles.data.map((article, i) => 
                <li> {article.attributes.name} </li>
                )} 
            </ul>
            </>
        );
    }
}
export default Browse;