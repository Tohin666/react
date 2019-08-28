import React, { Component, Fragment } from 'react';

import BlogsList from 'components/BlogsList'

export default class BlogsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blogs: [],
      page: 1
    };
  }

  //methods      

  loadBlogs = () => {
    //AJAX
    const { page } = this.state
    this.setState({ loading: true })

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((response) => response.json())
      .then((blogs) => {
        this.setState({
          loading: false,
          blogs: this.state.blogs.concat(blogs),
          page: page + 1
        })
      })
      .catch(() => { this.setState({ loading: false }) })
  }

  handleScroll = () => {
    // console.log(document.documentElement.clientHeight, window.scrollY, window.innerHeight, document.documentElement.clientHeight - window.scrollY - window.innerHeight)
    if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
      if (!this.state.loading) {
        this.loadBlogs()
      }
    }
  }

  componentWillReceiveProps () {
    let {userSearch} = this.props;

    if(userSearch !== /./) {
      this.setState ({
        blogs: this.state.blogs.filter (el => userSearch.test(el.body) || userSearch.test(el.title))
      })
    }
  }

  componentDidMount() {
    this.loadBlogs()

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { blogs, loading } = this.state

    return (
      <Fragment>
        <BlogsList blogs={blogs} /> {loading ? 'PROCESSING...' : ''}
      </Fragment>
    )
  }
}