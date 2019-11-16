import { combineReducers } from 'redux' // собирает редюсеры в один

import commentsReducer from './comments' // то что сами пишем
import blogsReducer from './blogs'
import searchReducer from './search'
import messagesReducer from './messages'

// собираем наши редюсеры
export default combineReducers ({
    comments: commentsReducer,
    blogs: blogsReducer,
    search: searchReducer,
    messages: messagesReducer,
})