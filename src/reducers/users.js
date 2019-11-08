import {
  READ_USER_PENDING,
  READ_USER_SUCCESS,
  READ_USER_FAILURE,

  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,

  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from "../config/ActionType";

const init = {
  loading: false,
  data: [],
  error: null
};

export default function UserReducer(state = init, action) {
  switch (action.type) {
    case READ_USER_PENDING:
      return {
        ...state,
        loading: true
      };
    case READ_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null
      };
    case READ_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case UPDATE_USER_PENDING:
      return {
        ...state,
        loading: true
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
