import { handleActions } from 'redux-actions' // упрощает обработку экшенов

import { loadBlogsStarted, loadBlogsCompleted, loadBlogsFailed } from 'actions/blogs' // импортируем наши экшены

// объявляем за какие данные в хранилище данный редюсер отвечает
const initialState = {
    blogsLoading: false,
    blogsEntities: [] // blogs
}

export default handleActions ({
    [loadBlogsStarted]: (state) => {
        return {
            ...state, // массив предыдущих состояний, который были в хранилище. state - это все хранилище целиком
            blogsLoading: true
        }
    },
    [loadBlogsCompleted]: (state, action) => {
        return {
            ...state,
            blogsLoading: false,
            blogsEntities: state.blogsEntities.concat (action.payload) // то что мы пробросили в экшене dispatch (loadBlogsCompleted (blogs)), blogs - это payload
        }
    },
    [loadBlogsFailed]: (state) => {
        return {
            ...state,
            blogsLoading: false
        }
    },
}, initialState)