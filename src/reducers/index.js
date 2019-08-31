import { combineReducers } from 'redux' // собирает редюсеры в один

import commentsReducer from './comments' // то что сами пишем
import blogsReducer from './blogs'
import searchReducer from './search'

// собираем наши редюсеры
export default combineReducers ({
    comments: commentsReducer,
    blogs: blogsReducer,
    search: searchReducer,
})