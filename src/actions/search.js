import { createAction } from 'redux-actions' // для удобства, упрощает работу с экшенами

export const searchAction = createAction('[Search] activated')

export const loadSearchedBlogs = (dispatch) => {
// export const loadBlogs = (dispatch) => { // dispatch - переменная редакса
  dispatch (searchAction()) // это будет payload?

  // dispatch (loadBlogsStarted ()) // если меняются статичные данные, то никаких аргументов не пробрасываем
  // fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  //   .then((response) => response.json())
  //   .then((blogs) => {     
  //     dispatch(loadBlogsCompleted(blogs)) // здесь данные нестатичные, они подгружаются, поэтому пробрасываем в качестве аргумента
  //   })    
  //   .catch(() => { dispatch(loadBlogsFailed()) })
}
