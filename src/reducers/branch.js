import {
    READ_BRANCH_PENDING,
    READ_BRANCH_SUCCESS,
    READ_BRANCH_FAILURE
} from "../config/ActionType";

const init = {
    loading: false,
    data: [],
    error: null
};

export default function branchReducer(state = init, action) {
    switch (action.type) {
        case READ_BRANCH_PENDING:
            console.log("on read branch pending")
            return {
                ...state,
                loading: true
            };
        case READ_BRANCH_SUCCESS:
            console.log("on read branch success")

            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case READ_BRANCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
