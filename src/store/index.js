import { createStore } from 'redux';

import reducers from './reducers';
import { loadState, saveState  } from './localStorage';

const localStorageState = loadState();

const store = createStore(
    reducers, 
    localStorageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState({ list: store.getState().list });
});
 
/*
Exemplo 
console.log('before dispatch', store.getState());

store.dispatch({ type: 'ADD_PRODUCT', list: 'mes', product: { name: 'Café' } });

console.log('after dispatch', store.getState());
*/

export default store;