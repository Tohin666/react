import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Menu from './components/Menu' // пишем дальше /Menu.jsx потому что прописали там в index.js
import Container from './components/Container'
import Layout from './components/Layout'
import MainPage from './components/MainPage';
import Login from './components/Login';
import CommentForm from './components/CommentForm'

import 'bootstrap/dist/css/bootstrap.min.css';


const items = [
    {href: '/', title: 'Home'},
    {href: '/news', title: 'News'},
    {href: '/blog', title: 'Blog'}
]

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          comments: []
        } 
    }
    
      handleComment = (comment) => {
        this.setState ((prev) => ({
          ...prev,
          comments: prev.comments.concat ([comment])
        }))
    }
    
    render () {
        const { comments } = this.state
        
        return (
            <div className="box">
                <Container>
                    <Layout>
                        <Menu items_prop={ items } title={'Main menu'}></Menu>
                        <Login></Login>
                        <MainPage>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut iste omnis beatae asperiores incidunt quo excepturi fugiat, quaerat, harum cum tempora ratione reiciendis deserunt. Minima cumque odit dolor dicta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur quia inventore quasi incidunt repudiandae corporis neque, cum nisi maiores voluptatibus fugit laborum tempore? Corporis qui veniam sunt vero officiis quo culpa soluta unde possimus ut labore mollitia at ratione dolore nihil, ullam, harum minima aliquam facere quibusdam itaque sit aut amet esse. Nobis, dolor aspernatur, dolorum modi quibusdam eos amet corrupti animi consequuntur laudantium necessitatibus distinctio sapiente velit inventore minus nam, atque quasi? Amet nobis, illo optio consequatur fugit perspiciatis laboriosam distinctio in id dicta praesentium ducimus aliquid vitae necessitatibus blanditiis minus debitis repudiandae dolore quia tenetur eaque laborum?

                            <br/><hr/>                            
                            <CommentForm onSend={this.handleComment} />

                            <ul>
                                {comments.map ((comment, idx) => <li key={idx}>{comment.author}: {comment.message}</li>)}
                            </ul>

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