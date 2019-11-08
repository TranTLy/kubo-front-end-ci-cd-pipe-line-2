import {
    READ_SCHEDULE_PENDING,
    READ_SCHEDULE_SUCCESS,
    READ_SCHEDULE_FAILURE
} from "../config/ActionType";

const init = {
    loading: false,
    data: [],
    error: null
};

export default function scheduleReducer(state = init, action) {
    switch (action.type) {
        case READ_SCHEDULE_PENDING:
            return {
                ...state,
                loading: true
            };
        case READ_SCHEDULE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case READ_SCHEDULE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
