import React, { Component, Fragment } from 'react'

import './Brand.css'

export default class Brand extends Component {
    render () {
        const {children, brand_name} = this.props
        return (
            <Fragment>
                <h2>{ brand_name }</h2>
            </Fragment>
        )
    }
}