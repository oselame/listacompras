import { Types } from '../actions/list';
import { createSelector } from 'reselect';
import uuidv1 from 'uuid/v1';

const INITIAL_STATE = {
    lista: null,
    items: []
}

export default function lista(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_PRODUCT:
            return {
                list: action.list, 
                items: [ 
                    ...state.items, 
                    { ...action.product, 
                        total: getItemTotal(action.product),
                        id: uuidv1(),
                        checked: false 
                    }
                ]
            };
        case Types.DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.productId)
            }
        
        case Types.TOGGLE_PRODUCT:
            return {
                ...state,
                items: toggleItem(state.items, action.productId)
            }

        case Types.UPDATE_PRODUCT:
            return {
                list: action.list,
                items: updateProduct(state.items, action.product)
            }
        default:
            return state;
    }
}

// Helpers
function toggleItem(items, productId) {
    const index = items.findIndex(item => item.id === productId);
    return [
        ...items.slice(0, index),
        { ...items[index], checked: !items[index].checked },
        ...items.slice(index + 1)
    ]
}

function updateProduct(items, product) {
    const index = items.findIndex(item => item.id === product.id);
    return [
        ...items.slice(0, index),
        { ...product, total: getItemTotal(product) },
        ...items.slice(index + 1)
    ]
}

function getItemTotal(product) {
    return product.price * product.quantity;
}

// Selectors
export const getListTotal = createSelector(
    state => state.list.items,
    items => items.reduce((total, item) => total + item.total, 0),
);

export const getOpenedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => !item.checked).length
);

export const getClosedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => item.checked).length
);