import uuid from 'uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const intialState = {
    items: [
        { id: uuid(), name: "Eggs" },
        { id: uuid(), name: "Milk" },
        { id: uuid(), name: "steak" },
        { id: uuid(), name: "water" }
    ]
}

export default function (state = intialState, action) {

}