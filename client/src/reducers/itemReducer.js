import uuid from 'uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types'

const intialState = {
    items: [],
    loading: false
}

export default function (state = intialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payLoad)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payLoad, ...state.items]
            }
        default:
            return state
    }
}