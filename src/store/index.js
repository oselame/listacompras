import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(
    reducers, 
    /* preloadedState, */ 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 
/*
Exemplo 
console.log('before dispatch', store.getState());

store.dispatch({ type: 'ADD_PRODUCT', list: 'mes', product: { name: 'Café' } });

console.log('after dispatch', store.getState());
*/

export default store;