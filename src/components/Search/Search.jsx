import React, { Component, Fragment } from 'react'
import { Card, Button, CardHeader, CardBody, Input, InputGroup } from 'reactstrap';

import { connect } from 'react-redux' // метод для связи с редаксом
import { loadSearchedBlogs } from 'actions/search' // экшн который мы создали

import './Search.css'

class Search extends Component {
// export default class Search extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userSearch: /./
    //     };
    // }

    handleSearch = (e) => {
        loadSearchedBlogs(this.state.userSearch)
        

        // let { onSearch } = this.props
        // onSearch(this.state.userSearch)
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

function mapStateToProps(state, props) {
    return {
      ...props,      
      userSearch: state.search.userSearch,
    }
  }
  
  function mapDispatchToProps(dispatch, props) {
    return {
      ...props,
      loadSearchedBlogs: () => loadSearchedBlogs(dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search)