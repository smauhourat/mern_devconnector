import { createStore, applyMiddleware } from 'redux';

/* Libreria para integrar herramientas de manejo del Store desde el browser */
import { composeWithDevTools } from 'redux-devtools-extension';

/* Libreria para interactuar con el Store de forma asyncrona */
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;