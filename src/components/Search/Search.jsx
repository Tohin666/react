import React, { Component, Fragment } from 'react'
import { Card, Button, CardHeader, CardBody, Input, InputGroup } from 'reactstrap';

import './Search.css'

export default class Search extends Component {
    render () {        
        return (
            // вместо дивов, чтобы не вкладывались друг в друга при рендере верстки, подключается выше.
            <Fragment>
                <Card>
                    <CardHeader tag="h3">Search</CardHeader>
                    <CardBody>
                        <InputGroup>
                            <Input placeholder="Search for..." />
                            <Button>Go</Button>
                        </InputGroup>
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}