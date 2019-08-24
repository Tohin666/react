import './AboutPage.css';

import React, { Component, Fragment } from 'react';

export default class AboutPage extends Component {
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <div className="about-page col-lg-8">
          <h1>This is AboutPage</h1>
          <hr />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut iste omnis beatae asperiores incidunt quo excepturi fugiat, quaerat, harum cum tempora ratione reiciendis deserunt. Minima cumque odit dolor dicta.
          
          {children}
        </div>
      </Fragment>
    )
  }
}