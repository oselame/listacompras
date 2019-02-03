import { Types } from '../actions/list';
import { createSelector } from 'reselect';

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
                    { ...action.product , total: getItemTotal(action.product) }
                ]
            };
    
        default:
            return state;
    }
}

function getItemTotal(product) {
    return product.price * product.quantity;
}

export const getListTotal = createSelector(
    state => state.list.items,
    items => items.reduce((total, item) => total + item.total, 0),
);