import { createAction } from 'redux-actions' // для удобства, упрощает работу с экшенами

export const loadBlogsStarted = createAction('[Blogs] loading started') // в скобках информация для нас, [Blogs] указывает на редюсер Blogs
export const loadBlogsCompleted = createAction('[Blogs] loading completed')
export const loadBlogsFailed = createAction('[Blogs] loading failed')

export const loadBlogs = (dispatch) => { // dispatch - переменная редакса
  //this.setState ({ loading: true })//1 loadingStarted
  dispatch(loadBlogsStarted()) // если меняются статичные данные, то никаких аргументов не пробрасываем
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    .then((response) => response.json())
    .then((blogs) => {
      // this.setState ({
      //   loading: false,
      //   blogs: this.state.blogs.concat (blogs)//2 loadingCompleted
      // })
      dispatch(loadBlogsCompleted(blogs)) // здесь данные нестатичные, они подгружаются, поэтому пробрасываем в качестве аргумента
    })
    // .catch (() => { this.setState ({ loading: false }) })//3 loadingFailed
    .catch(() => { dispatch(loadBlogsFailed()) })
}
