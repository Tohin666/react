import React, { Component, Fragment } from 'react'
import { Card, Button, CardHeader, CardBody, Input, InputGroup } from 'reactstrap';

import './Categories.css'

export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {            
        };
    }
    
    render() {
        return (            
            <Fragment>
                <Card>
                    <CardHeader tag="h3">Categories</CardHeader>
                    <CardBody>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">Freebies</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="#">JavaScript</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">Tutorials</a></li>
                                </ul>
                            </div>
                        </div>                
                        
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}