import {combineReducers} from "redux";
import {roomsReducer} from  './roomsReducer'
import {roomReducer} from  './roomReducer'
export default combineReducers({
    rooms:roomsReducer,
    room: roomReducer
})
