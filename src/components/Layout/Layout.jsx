import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './Layout.css'

export default class Layout extends Component {
    render () {
        const {children} = this.props
        return (
            <div>
                { children }
            </div>
        )
    }
}