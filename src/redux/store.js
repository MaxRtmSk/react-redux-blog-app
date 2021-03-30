import { combineReducers, createStore, compose } from 'redux';
import AppReducer from './app-reducer';


let reducers = combineReducers({
    app: AppReducer,
})


let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
    
window.store = store;

export default store;