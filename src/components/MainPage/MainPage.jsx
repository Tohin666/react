import React, { Component, Fragment } from 'react'

import './MainPage.css'

export default class MainPage extends Component {
    render () {
        const {children} = this.props
        return (
            <Fragment>
                <div className="main-page col-lg-8">
                    { children }
                </div>
            </Fragment>
        )
    }
}