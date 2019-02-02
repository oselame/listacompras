import { Types } from '../actions/list';

const INITIAL_STATE = {
    lista: null,
    items: []
}


export default function lista(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_PRODUCT:
            return {
                list: action.list, 
                items: [ ...state.items, action.product ]
            };
    
        default:
            return state;
    }
}