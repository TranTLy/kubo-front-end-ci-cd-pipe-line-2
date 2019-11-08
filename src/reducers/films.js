import {
  READ_FILM_PENDING,
  READ_FILM_SUCCESS,
  READ_FILM_FAILURE,

  DELETE_FILM_PENDING,
  DELETE_FILM_SUCCESS,
  DELETE_FILM_FAILURE,

  CREATE_FILM_PENDING,
  CREATE_FILM_FAILURE,
  CREATE_FILM_SUCCESS,

  UPDATE_FILM_PENDING,
  UPDATE_FILM_FAILURE,
  UPDATE_FILM_SUCCESS,
} from "../config/ActionType";

const init = {
  loading: false,
  data: [],
  error: null
};

export default function filmReducer(state = init, action) {
  switch (action.type) {
    case READ_FILM_PENDING:
      return {
        ...state,
        loading: true
      };
    case READ_FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null
      };
    case READ_FILM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    //delete
    case DELETE_FILM_PENDING:
      return {
        ...state,
        loading: true
      };
    case DELETE_FILM_SUCCESS:
      console.log("action delete: ", action);
      return {
        ...state,
        loading: false,
        data: action.data.data,
        resultDelete: action.data.message,
        error: null
      };
    case DELETE_FILM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    //create
    case CREATE_FILM_PENDING:
      return {
        ...state,
        loading: true
      };
    case CREATE_FILM_SUCCESS:
      console.log("action delete: ", action);
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null
      };
    case CREATE_FILM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    //update
    case UPDATE_FILM_PENDING:
      return {
        ...state,
        loading: true
      };
    case UPDATE_FILM_SUCCESS:
      console.log("action update: ", action);
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null
      };
    case UPDATE_FILM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
