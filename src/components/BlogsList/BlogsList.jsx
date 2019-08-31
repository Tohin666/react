import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardHeader, CardBody } from 'reactstrap';

import './BlogsList.css';

export default class BlogsList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  //methods

  render() {
    const { blogs } = this.props
    return (
      <Fragment>
        <div className="blogs-list">
          {blogs.map(({ title, body, id }, idx) =>
            <Card key={idx} className="blogs-list-card">
              <img src="/src/img/750x300.png" alt="" />
              <Link to={`/blog/${id}`}><CardHeader tag="h3">{title}</CardHeader></Link>
              <CardBody>
                {body}<br />
                <Link to={`/blog/${id}`}><Button className="btn btn-primary blogs-list-btn">Read More →</Button></Link>
              </CardBody>
            </Card>
            // <div key={idx}>
            //   <Link to={`/blog/${id}`}>
            //     <h3> {title} </h3>
            //   </Link>

            //   <p> {body} </p>
            // </div>
          )}
        </div>
      </Fragment>
    )
  }
}