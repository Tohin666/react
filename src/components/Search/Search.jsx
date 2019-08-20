import React, { Component, Fragment } from 'react'
import { Card, Button } from 'react-bootstrap';

import './Search.css'

export default class Search extends Component {
    render () {
        
        return (
            // вместо дивов, чтобы не вкладывались друг в друга при рендере верстки, подключается выше.
            <Fragment>                
                <Card>
                    <Card.Header as="h5">Search</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}