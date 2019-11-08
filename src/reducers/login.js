import {
  LOG_IN,
  LOG_OUT,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "../config/ActionType";

const init = {
  isLoggedIn: false,
  user: []
};

export default function LogIn(state = init, action) {
  switch (action.type) {
    case LOG_IN:
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true
      };
    case LOG_OUT:
    case CREATE_USER_FAILURE:
      return {
        ...state,
        user: [],
        isLoggedIn: false
      };
    default:
      return state;
  }
}
