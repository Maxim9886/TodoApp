import { combineReducers } from 'redux'
import todosReducer from "./slice/todoSlice.ts";


const rootReducer = combineReducers({
    todos: todosReducer,
})

export default rootReducer