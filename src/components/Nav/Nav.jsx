import React, { Component } from 'react'

import './Nav.css'

export default class Nav extends Component {
    render () {
        const {children} = this.props
        return (
            <div className="nav">
                { children }
            </div>
        )
    }
}