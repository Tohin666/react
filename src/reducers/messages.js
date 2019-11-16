import { handleActions } from 'redux-actions'

import { messageReceived, messageLoadComplete } from 'actions/messages'

const initialState = {
    entities: [],
}

export default handleActions ({
    [messageReceived]: (state, action) => {
        return {
            ...state,
            entities: state.entities.concat ([action.payload]),
        }
    },
    [messageLoadComplete]: (state, action) => {
        return {
            ...state,            
            entities: state.entities.concat (action.payload),            
        }
    },    
}, initialState)