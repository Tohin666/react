import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Menu from './components/Menu' // пишем дальше /Menu.jsx потому что прописали там в index.js
import Container from './components/Container'
import Layout from './components/Layout'
import MainPage from './components/MainPage';
import Login from './components/Login';

require('bootstrap');
import 'bootstrap';

const items = [
    {href: '/', title: 'Home'},
    {href: '/news', title: 'News'},
    {href: '/blog', title: 'Blog'}
]

class App extends Component {
    render () {
        return (
            <div className="test1">
                <Container>
                    <Layout>
                        <Menu items_prop={ items } title={'Main menu'}></Menu>
                        <Login></Login>
                        <MainPage>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut iste omnis beatae asperiores incidunt quo excepturi fugiat, quaerat, harum cum tempora ratione reiciendis deserunt. Minima cumque odit dolor dicta.
                            </MainPage>
                        <Menu items_prop={ items } title={'Footer menu'}></Menu>
                    </Layout>                    
                </Container>                
            </div>
        )
    }
}

//ReactDom.render (/Что/, /Куда/)
ReactDom.render (<App />, document.querySelector ('#root'))