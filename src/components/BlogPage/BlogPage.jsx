import React, { Component, Fragment } from 'react'

import './BlogPage.css'

import BlogsContainer from 'containers/BlogsContainer'

export default class BlogPage extends Component {
    render () {
        const {children} = this.props
        return (
            <Fragment>
                <div className="blog-page col-lg-8">
                    <h1>My Blog</h1>
                    
                    <hr/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut iste omnis beatae asperiores incidunt quo excepturi fugiat, quaerat, harum cum tempora ratione reiciendis deserunt. Minima cumque odit dolor dicta.
                    
                    <hr/>
                    <BlogsContainer userSearch={this.props.userSearch}/>

                    { children }
                </div>
            </Fragment>
        )
    }
}