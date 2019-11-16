import React, { Component } from 'react'

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