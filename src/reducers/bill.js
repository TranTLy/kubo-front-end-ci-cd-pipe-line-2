import {
    READ_BILL_PENDING,
    READ_BILL_SUCCESS,
    READ_BILL_FAILURE,
    CREATE_BILL_PENDING,
    CREATE_BILL_SUCCESS,
    CREATE_BILL_FAILURE
} from "../config/ActionType";

const init = {
    loading: false,
    data: [],
    error: null
};

export default function billReducer(state = init, action) {
    switch (action.type) {
        case READ_BILL_PENDING:
            return {
                ...state,
                loading: true
            };
        case READ_BILL_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case READ_BILL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case CREATE_BILL_PENDING:
            return {
                ...state,
                loading: true
            };
        case CREATE_BILL_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case CREATE_BILL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
