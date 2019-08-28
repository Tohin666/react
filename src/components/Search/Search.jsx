import React, { Component, Fragment } from 'react'
import { Card, Button, CardHeader, CardBody, Input, InputGroup } from 'reactstrap';

import './Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSearch: /./
        };
    }

    handleSearch = (e) => {
        let { onSearch } = this.props

        onSearch(this.state.userSearch)
    }

    addReg = (e) => {
        let reg = e.target.value
        this.setState({ userSearch: new RegExp(reg, 'i') })
    }
    render() {
        return (
            // вместо дивов, чтобы не вкладывались друг в друга при рендере верстки, подключается выше.
            <Fragment>
                <Card>
                    <CardHeader tag="h3">Search</CardHeader>
                    <CardBody>
                        <InputGroup>
                            <Input onInput={this.addReg} placeholder="Search for..." />
                            <Button onClick={this.handleSearch}>Go</Button>
                        </InputGroup>
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}