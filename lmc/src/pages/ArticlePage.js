import { Card, Figure, Placeholder, Row } from "react-bootstrap";
import { Component } from "react/cjs/react.production.min";
import MyNavbar from "../components/MyNavbar"
import Footer from "../components/Footer"
import "../css/Article.css";

class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        article:  [],
           loading: true
        }
    }

    async componentDidMount() {
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        const response = await fetch('http://localhost:1337/api/articles/'+id+'/?populate=*',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const article = await response.json();
        
        setTimeout(() => this.setState({                              
            article: article,
            loading: false
        }), 500);
    }

    render() {

    return (
        <>  
            <MyNavbar/>
            {this.state.loading ? 
            <>
            <p aria-hidden="true">
                    <div className="cardPageImg">
                        <Card.Img style={{height: this.state.article.data ? this.state.article.data.attributes.Image.data.attributes.formats.thumbnail.height :null}} variant="top" src="https://horizondatasys.com/wp-content/uploads/2018/01/Dark-Gray-Square-300x300.png" />
                    </div>
                    <Placeholder as={Card.Text} animation="wave">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="wave">
                        <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="wave">
                        <Placeholder xs={8} />
                    </Placeholder>

            </p>
          
            {/* <Placeholder.Button xs={4} aria-hidden="true" /> */}
          </>
            :null}
                   { this.state.article.data ? 
                   <> 
                   {/* {console.log(this.state)} */}
                   <Row className="text-center">
                    <Figure>
                        <Figure.Image as={Card.Img}
                        
                            width={this.state.article.data.attributes.Image.data.attributes.formats.thumbnail.width}
                            height={this.state.article.data.attributes.Image.data.attributes.formats.thumbnail.height}
                            alt="Image didn't loaded properly"
                            src={"http://localhost:1337"+this.state.article.data.attributes.Image.data.attributes.formats.thumbnail.url}
                        />
                        <Figure.Caption className="description-text" >
                            {this.state.article.data.attributes.description}
                        </Figure.Caption>
                    </Figure> 

                   </Row>
                   
                   </>
                   :null
                }

                <Footer/>
        </>

        )
    }
} export default ArticlePage;


