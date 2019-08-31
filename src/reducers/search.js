import { handleActions } from 'redux-actions' // упрощает обработку экшенов

import { searchAction } from 'actions/search' // импортируем наши экшены

// объявляем за какие данные в хранилище данный редюсер отвечает
const initialState = {
    userSearch: /./    
}

export default handleActions ({
    [searchAction]: (state, action) => {
        return {
            ...state, // массив предыдущих состояний, который были в хранилище. state - это все хранилище целиком
            userSearch: action.payload
        }
    },
    // [loadBlogsCompleted]: (state, action) => {
    //     return {
    //         ...state,
    //         blogsLoading: false,
    //         blogsEntities: state.blogsEntities.concat (action.payload) // то что мы пробросили в экшене dispatch (loadBlogsCompleted (blogs)), blogs - это payload
    //     }
    // },
    // [loadBlogsFailed]: (state) => {
    //     return {
    //         ...state,
    //         blogsLoading: false
    //     }
    // },
}, initialState)