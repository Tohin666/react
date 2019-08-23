import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Menu from './components/Menu' // пишем дальше /Menu.jsx потому что прописали там в index.js
import Container from './components/Container'
import Layout from './components/Layout'
import MainPage from './components/MainPage';
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
                    <MainPage>
                        <h1>Post Title</h1>
                        <hr/>
                        <img src="/src/img/900x300.png" alt="" width="100%"/>
                        <hr/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut iste omnis beatae asperiores incidunt quo excepturi fugiat, quaerat, harum cum tempora ratione reiciendis deserunt. Minima cumque odit dolor dicta.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur quia inventore quasi incidunt repudiandae corporis neque, cum nisi maiores voluptatibus fugit laborum tempore? Corporis qui veniam sunt vero officiis quo culpa soluta unde possimus ut labore mollitia at ratione dolore nihil, ullam, harum minima aliquam facere quibusdam itaque sit aut amet esse. Nobis, dolor aspernatur, dolorum modi quibusdam eos amet corrupti animi consequuntur laudantium necessitatibus distinctio sapiente velit inventore minus nam, atque quasi? Amet nobis, illo optio consequatur fugit perspiciatis laboriosam distinctio in id dicta praesentium ducimus aliquid vitae necessitatibus blanditiis minus debitis repudiandae dolore quia tenetur eaque laborum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut iste omnis beatae asperiores incidunt quo excepturi fugiat, quaerat, harum cum tempora ratione reiciendis deserunt. Minima cumque odit dolor dicta.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur quia inventore quasi incidunt repudiandae corporis neque, cum nisi maiores voluptatibus fugit laborum tempore? Corporis qui veniam sunt vero officiis quo culpa soluta unde possimus ut labore mollitia at ratione dolore nihil, ullam, harum minima aliquam facere quibusdam itaque sit aut amet esse. Nobis, dolor aspernatur, dolorum modi quibusdam eos amet corrupti animi consequuntur laudantium necessitatibus distinctio sapiente velit inventore minus nam, atque quasi? Amet nobis, illo optio consequatur fugit perspiciatis laboriosam distinctio in id dicta praesentium ducimus aliquid vitae necessitatibus blanditiis minus debitis repudiandae dolore quia tenetur eaque laborum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut iste omnis beatae asperiores incidunt quo excepturi fugiat, quaerat, harum cum tempora ratione reiciendis deserunt. Minima cumque odit dolor dicta.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur quia inventore quasi incidunt repudiandae corporis neque, cum nisi maiores voluptatibus fugit laborum tempore? Corporis qui veniam sunt vero officiis quo culpa soluta unde possimus ut labore mollitia at ratione dolore nihil, ullam, harum minima aliquam facere quibusdam itaque sit aut amet esse. Nobis, dolor aspernatur, dolorum modi quibusdam eos amet corrupti animi consequuntur laudantium necessitatibus distinctio sapiente velit inventore minus nam, atque quasi? Amet nobis, illo optio consequatur fugit perspiciatis laboriosam distinctio in id dicta praesentium ducimus aliquid vitae necessitatibus blanditiis minus debitis repudiandae dolore quia tenetur eaque laborum?

                        <br/><hr/>                            
                        <CommentForm onSend={this.handleComment} />
                        <br/>
                        <ul>
                            {comments.map ((comment, idx) => <li key={idx}><h3>{comment.author}</h3><p>{comment.message}</p></li>)}
                        </ul>
                        
                        <CommentsContainer />

                    </MainPage>

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