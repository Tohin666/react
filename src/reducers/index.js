import { combineReducers } from 'redux' // собирает редюсеры в один

import commentsReducer from './comments' // то что сами пишем

// собираем наши редюсеры
export default combineReducers ({
    comments: commentsReducer
})