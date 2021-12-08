import { VISIBILITY_FILTER } from "../../constants"
import { SET_FILTER } from "../actionType";


const intialState = VISIBILITY_FILTER.ALL;

const VisFilter = (state = intialState, action) => {
    switch(action.type) {
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default VisFilter;