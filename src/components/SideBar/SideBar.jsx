import React, { Component, Fragment } from 'react'

import './SideBar.css'

export default class SideBar extends Component {
    render () {
        const {children} = this.props
        return (
            <Fragment>
                <div className="side-bar col-md-4">
                    { children }
                </div>
            </Fragment>
        )
    }
}