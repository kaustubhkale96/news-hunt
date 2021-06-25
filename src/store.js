import { createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './Reducers/loginReducer'
import thunk from 'redux-thunk';

const allReducers = combineReducers({data: loginReducer})
 const store =createStore(
     allReducers,
     applyMiddleware(thunk),
     window.devToolsExtension && window.devToolsExtension()
 )

 export default store;