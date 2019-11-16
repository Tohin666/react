import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes';

import { Provider } from 'react-redux'
import store from './store' //Объект store, который мы создали

import Menu from './components/Menu' // не пишем дальше /Menu.jsx потому что прописали там в index.js
import Container from './components/Container'
import Layout from './components/Layout'
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import NewsPage from './components/NewsPage';
import BlogPage from './components/BlogPage';
import Login from './components/Login';
import Nav from './components/Nav'
import Brand from './components/Brand'
import SideBar from './components/SideBar'
import Search from './components/Search'
import Categories from './components/Categories'
import SideWidget from './components/SideWidget'

import 'bootstrap/dist/css/bootstrap.min.css';

const brandName = 'Start Bootstrap';
const items = [
    { href: '/', title: 'Home' },
    { href: '/news', title: 'News' },
    { href: '/blog', title: 'Blog' },
    { href: '/about', title: 'About' },
    { href: '/messages', title: 'Messages' },
]

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // comments: [],
            // route: window.location.hash.substr(1),
            userSearch: /./
        }
    }

    // componentDidMount() {
    //     window.addEventListener('hashchange', () => {
    //         this.setState({
    //             route: window.location.hash.substr(1)
    //         })
    //     })
    // }
    
    handleWidgetSearch = (reg) => {
        this.setState({ userSearch: reg })
    }

    render() {

        return (
            <div className="box">
                <Nav>
                    <Container>
                        <Brand brand_name={brandName}></Brand>
                        <div>
                            <Menu items_prop={items}></Menu>
                            <Login></Login>
                        </div>
                    </Container>
                </Nav>
                <Container>
                    <Switch>
                        {/* <Route path="/" component={ MainPage } exact />
                        <Route path="/news" component={NewsPage} exact />
                        <Route path="/blog" component={BlogPage} exact />
                        <Route path="/about" component={AboutPage} exact /> */}

                        <Route path="/blog" render={()=><BlogPage userSearch={this.state.userSearch}/>} exact />
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                    </Switch>                    

                    <SideBar>
                        <Search onSearch={this.handleWidgetSearch} /><br/>
                        <Categories /><br/>
                        <SideWidget />
                    </SideBar>

                </Container>
            </div>
        )
    }
}

//ReactDom.render (/Что/, /Куда/)
ReactDom.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root')); // обернули в BrowserRouter для роутинга, 
// и еще обернули в провайдер для редакса, в который прокидываем объект хранилища