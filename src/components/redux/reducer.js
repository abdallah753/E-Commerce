import * as actions from './actionType'

const initialState = {
    data: [],
    detail: {},
    total: 0,
    count: [],
    cart: [],
    antotal: 0,
    incre: 0
}

let dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.set_data:
            return { ...state, data: action.data }
            break;
        case actions.set_detail:
            return { ...state, detail: action.detail }
        case actions.set_total:
            return { ...state, total: action.total }
        case actions.set_count:
            return { ...state, count: action.count }
        case actions.concat_to_cart:
            return { ...state, cart: [...state.cart, action.cart] }
        case actions.set_cart:
            return { ...state, cart: action.cart }
        case actions.antotal:
            return { ...state, antotal: action.antotal }
        case actions.set_incre:
            return { ...state, incre: 1 }
        default:
            return { ...state }
            break;
    }
}

export default dataReducer