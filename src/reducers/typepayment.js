import {
    READ_TYPEPAYMENT_PENDING,
    READ_TYPEPAYMENT_SUCCESS,
    READ_TYPEPAYMENT_FAILURE

} from "../config/ActionType";

const init = {
    loading: false,
    data: [],
    error: null
};

export default function typePaymentReducer(state = init, action) {
    switch (action.type) {
        case READ_TYPEPAYMENT_PENDING:
            return {
                ...state,
                loading: true
            };
        case READ_TYPEPAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case READ_TYPEPAYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
