import {
    READ_USER_FILM_FAVOR_PENDING,
    READ_USER_FILM_FAVOR_SUCCESS,
    READ_USER_FILM_FAVOR_FAILURE
} from "../config/ActionType";

const init = {
    loading: false,
    data: [],
    error: null
};

export default function userFilmFavorReducer(state = init, action) {
    switch (action.type) {
        case READ_USER_FILM_FAVOR_PENDING:
            return {
                ...state,
                loading: true
            };
        case READ_USER_FILM_FAVOR_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case READ_USER_FILM_FAVOR_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
