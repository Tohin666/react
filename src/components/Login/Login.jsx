import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './Login.css'

export default class Login extends Component {
    render () {
        const {children} = this.props
        return (
            <div>
                { children }
                <button>Login</button>
            </div>
        )
    }
}