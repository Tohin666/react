import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './MainPage.css'

export default class MainPage extends Component {
    render () {
        const {children} = this.props
        return (
            <div>
                { children }
            </div>
        )
    }
}