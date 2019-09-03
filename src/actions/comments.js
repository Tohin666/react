import { createAction } from 'redux-actions' // для удобства, упрощает работу с экшенами

export const loadStarted = createAction('[Comments] loading started') // в скобках информация для нас, [Comments] указывает на редюсер Comments
export const loadCompleted = createAction('[Comments] loading completed')
export const loadFailed = createAction('[Comments] loading failed')

// Переделали в функцию которая возвращает функцию
export const load = () => (dispatch, getState) => { // dispatch - переменная редакса
  // export const load = (dispatch) => { // dispatch - переменная редакса

  const state = getState(); // блоагодаря thunk получаем доступ к хранилищу

  //this.setState ({ loading: true })//1 loadingStarted

  dispatch(loadStarted()) // если меняются статичные данные, то никаких аргументов не пробрасываем
  fetch(`https://jsonplaceholder.typicode.com/comments?_limit=15&_page=${state.comments.page}`)
    .then((response) => response.json())
    .then((comments) => {
      // this.setState ({
      //   loading: false,
      //   comments: this.state.comments.concat (comments)//2 loadingCompleted
      // })
      dispatch(loadCompleted(comments)) // здесь данные нестатичные, они подгружаются, поэтому пробрасываем в качестве аргумента
    })
    // .catch (() => { this.setState ({ loading: false }) })//3 loadingFailed
    .catch(() => { dispatch(loadFailed()) })
}
