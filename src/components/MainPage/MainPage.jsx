import React, { Component, Fragment } from 'react'

import './MainPage.css'

export default class MainPage extends Component {
    render () {
        const {children} = this.props
        return (
            <Fragment>
                <div className="main-page">
                    { children }
                </div>
            </Fragment>
        )
    }
}