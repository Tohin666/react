import { handleActions } from 'redux-actions' // упрощает обработку экшенов

import { loadStarted, loadCompleted, loadFailed } from 'actions/comments' // импортируем наши экшены

// объявляем за какие данные в хранилище данный редюсер отвечает
const initialState = {
    loading: false,
    entities: [] // comments
}

export default handleActions ({
    [loadStarted]: (state) => {
        return {
            ...state, // массив предыдущих состояний, который были в хранилище. state - это все хранилище целиком
            loading: true
        }
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            loading: false,
            entities: state.entities.concat (action.payload) // то что мы пробросили в экшене dispatch (loadCompleted (comments)), comments - это payload
        }
    },
    [loadFailed]: (state) => {
        return {
            ...state,
            loading: false
        }
    },
}, initialState)