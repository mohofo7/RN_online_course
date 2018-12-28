import { createStore , compose , applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import root_reducer from './reducers/index';

let reduxCompose = compose;

if(__DEV__){
    reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = ()=>{
    return createStore(root_reducer,reduxCompose(applyMiddleware(promiseMiddleware)));
}

export default configureStore;