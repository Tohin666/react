import React, { Component, Fragment } from 'react'
import { Card, Button, CardHeader, CardBody, Input, InputGroup } from 'reactstrap';

import './SideWidget.css'

export default class SideWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {            
        };
    }
    
    render() {
        return (            
            <Fragment>
                <Card>
                    <CardHeader tag="h3">Side Widget</CardHeader>
                    <CardBody>
                        <div className="card-body">
                            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                        </div>                
                        
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}