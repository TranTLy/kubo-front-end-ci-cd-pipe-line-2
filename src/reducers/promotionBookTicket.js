import {
    READ_PROMOTION_BOOK_TICKET_PENDING,
    READ_PROMOTION_BOOK_TICKET_SUCCESS,
    READ_PROMOTION_BOOK_TICKET_FAILURE,

} from "../config/ActionType";

const init = {
    loading: false,
    data: [],
    error: null
};

export default function promotionReducer(state = init, action) {
    switch (action.type) {
        case READ_PROMOTION_BOOK_TICKET_PENDING:
            return {
                ...state,
                loading: true
            };
        case READ_PROMOTION_BOOK_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case READ_PROMOTION_BOOK_TICKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
