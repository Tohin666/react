import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import routes from './routes';

import Menu from './components/Menu' // не пишем дальше /Menu.jsx потому что прописали там в index.js
import Container from './components/Container'
import Layout from './components/Layout'
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import NewsPage from './components/NewsPage';
import Login from './components/Login';
import CommentForm from './components/CommentForm'
import Nav from './components/Nav'
import Brand from './components/Brand'
import SideBar from './components/SideBar'
import Search from './components/Search'

// настроили алиасы на containers и components
import CommentsContainer from 'containers/CommentsContainer'

import 'bootstrap/dist/css/bootstrap.min.css';

const brandName = 'Start Bootstrap';
const items = [
    {href: '/', title: 'Home'},
    {href: '#/news', title: 'News'},
    {href: '#/blog', title: 'Blog'},
    {href: '#/about', title: 'About'},
]

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          comments: [],
          route: window.location.hash.substr(1),          
        } 
    }

    componentDidMount(){
        window.addEventListener('hashchange',()=>{
            this.setState({
                route: window.location.hash.substr(1)
                })
            })
    }
    
    handleComment = (comment) => {
        this.setState ((prev) => ({
          ...prev,
          comments: prev.comments.concat ([comment])
        }))
    }
    
    render () {        
        const { comments } = this.state
        let Page
        switch (this.state.route) {
            case '/news':
                Page = NewsPage;
                break;
            case '/blog':
                Page = AboutPage;
                break;
            case '/about':
                Page = AboutPage;
                break;
            default:
                Page = MainPage;
        }        
        
        return (
            <div className="box">                
                <Nav>
                    <Container>
                        <Brand brand_name={ brandName }></Brand>
                        <div>
                            <Menu items_prop={ items }></Menu>
                            <Login></Login>
                        </div>
                    </Container>
                </Nav>
                <Container>                        
                    <Page>
                        
                        <br/><hr/>                            
                        <CommentForm onSend={this.handleComment} />
                        <br/>
                        <ul>
                            {comments.map ((comment, idx) => <li key={idx}><h3>{comment.author}</h3><p>{comment.message}</p></li>)}
                        </ul>
                        
                        <CommentsContainer />

                    </Page>

                    <SideBar>
                        <Search></Search>                        
                    </SideBar>
                                        
                </Container>                
            </div>
        )
    }
}

//ReactDom.render (/Что/, /Куда/)
ReactDom.render (<App />, document.querySelector ('#root'))