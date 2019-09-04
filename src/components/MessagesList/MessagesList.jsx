import './MessagesList.css';

    import React, { Component, Fragment } from 'react';
    
    export default class MessagesList extends Component {
        constructor(props) {
            super(props);
        
            this.state = {

            };
          }

        //methods
    
      render() {
        const { messages } = this.props
        
        return (
          <Fragment>
            <div className="MessagesList">
              <ul>
                {messages.map((el) => <li key={el._id}>
                  <h3>{el.author}</h3>
                  <p>{el.text}</p>
                  <h4>{el.timeStamp}</h4>
                </li>)}
              </ul>
            </div>
          </Fragment>
        )
      }
    }