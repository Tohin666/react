// входная точка для хранилища. может распологаться где угодно, указываем на него в индексе.
import { createStore } from 'redux'
import rootReducer from 'reducers' // прописали алиас к этой папке, оттуда импортнется index.js, который и является корневым редюсером

export default createStore (rootReducer) //экспорт объекта хранилища (STORE)
