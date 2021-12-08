import { combineReducers } from "redux";
import todos from "./Todos";
import VisFilter from "./VisFilter";


export default combineReducers({
    todos,
    VisFilter
})