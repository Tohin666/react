import './NewsPage.css';

import React, { Component, Fragment } from 'react';

export default class NewsPage extends Component {
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <div className="news-page col-lg-8">
          <h1>This is NewsPage</h1>
          <hr />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut iste omnis beatae asperiores incidunt quo excepturi fugiat, quaerat, harum cum tempora ratione reiciendis deserunt. Minima cumque odit dolor dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur quia inventore quasi incidunt repudiandae corporis neque, cum nisi maiores voluptatibus fugit laborum tempore? Corporis qui veniam sunt vero officiis quo culpa soluta unde possimus ut labore mollitia at ratione dolore nihil, ullam, harum minima aliquam facere quibusdam itaque sit aut amet esse. Nobis, dolor aspernatur, dolorum modi quibusdam eos amet corrupti animi consequuntur laudantium necessitatibus distinctio sapiente velit inventore minus nam, atque quasi? Amet nobis, illo optio consequatur fugit perspiciatis laboriosam distinctio in id dicta praesentium ducimus aliquid vitae necessitatibus blanditiis minus debitis repudiandae dolore quia tenetur eaque laborum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          {children}
        </div>
      </Fragment>
    )
  }
}