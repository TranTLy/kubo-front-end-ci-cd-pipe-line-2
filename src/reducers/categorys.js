import {
  READ_CATEGORY_PENDING,
  READ_CATEGORY_SUCCESS,
  READ_CATEGORY_FAILURE
} from "../config/ActionType";

const init = {
  loading: false,
  data: [],
  error: null
};

export default function categoryReducer(state = init, action) {
  switch (action.type) {
    case READ_CATEGORY_PENDING:
      return {
        ...state,
        loading: true
      };
    case READ_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null
      };
    case READ_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
