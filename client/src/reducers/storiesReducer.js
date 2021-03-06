import {
  FETCHING_STORIES,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADDING_STORY,
  ADD_FAILURE,
  ADD_SUCCESS,
  GETTING_STORY,
  GET_FAILURE,
  GET_SUCCESS,
  EDITING_STORY,
  UPDATING_STORY,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  SET_CURRENT_STORY
} from "../actions/types";

const initialState = {
  stories: [],
  currentStory: null,
  gettingStory: false,
  editing: false,
  updatingStory: false,
  fetchingStories: false,
  addingStory: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_STORIES:
      return {
        ...state,
        fetchingStories: action.payload
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        stories: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case ADDING_STORY:
      return {
        ...state,
        addingStory: action.payload
      };
    case ADD_SUCCESS:
      return {
        ...state,
        addingStory: action.payload
      };
    case ADD_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case UPDATING_STORY:
      return {
        ...state,
        updatingStory: action.payload
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        updatingStory: action.payload
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case GETTING_STORY:
      return {
        ...state,
        gettingStory: action.payload
      };

    case GET_SUCCESS:
      return {
        ...state,
        currentStory: action.payload,
        editing: true
      };

    case SET_CURRENT_STORY:
      return {
        ...state,
        currentStory: action.payload
      };
    case EDITING_STORY:
      return {
        ...state,
        editing: action.payload
      };
    case GET_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
