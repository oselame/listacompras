import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

import { loadState, saveState  } from './localStorage';

const localStorageState = loadState();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers, 
    localStorageState,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(sagas);

store.subscribe(() => {
    saveState({ list: store.getState().list });
});
 
/*

https://github.com/zalmoxisus/redux-devtools-extension

Exemplo 
console.log('before dispatch', store.getState());

store.dispatch({ type: 'ADD_PRODUCT', list: 'mes', product: { name: 'Café' } });

console.log('after dispatch', store.getState());
*/

export default store;