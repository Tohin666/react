// входная точка для хранилища. может распологаться где угодно, указываем на него в индексе.
import { createStore, applyMiddleware } from 'redux' // applyMiddleware для того чтобы пробрасывать миддлверы
import rootReducer from 'reducers' // прописали алиас к этой папке, оттуда импортнется index.js, который и является корневым редюсером
import thunk from 'redux-thunk'

// import logger from 'redux-logger' // Middleware
// Реализуем логгер вручную, как будто импортнули
function logger(store) {
    return function(next) {
        return function(action) {
            console.log('action', action)
            console.log('prev state', store.getState())
            
            // Экшен совершается здесь
            let result = next(action)

            console.log('next state', store.getState())

            return result
        }
    }
}

//экспорт объекта хранилища (STORE)
export default createStore (
    rootReducer,
    applyMiddleware(logger, thunk)
    ) 
