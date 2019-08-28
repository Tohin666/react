import React, { Component, Fragment } from 'react';

import './Blog.css';

export default function (props) {
  return (
    <Fragment> 
      <div className="Blog">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </div>
    </Fragment>
  )
}