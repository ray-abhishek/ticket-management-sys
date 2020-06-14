import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import ticketReducer from './TicketReducer/ticketReducer'
import authReducer from './UserAuthReducer/userAuthReducer'

const rootReducer = combineReducers({ auth : authReducer , ticket : ticketReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store 





