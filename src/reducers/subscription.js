import {
  FETCH_SUBSCRIPTION_BEGIN,
  FETCH_SUBSCRIPTION_SUCCESS,
  FETCH_SUBSCRIPTION_FAILURE,
} from '../actions/subscription';

import { subState } from './InitialState';

const subscriptionsReducer = (state = subState, action) => {
  switch (action.type) {
    case FETCH_SUBSCRIPTION_BEGIN:
      return {
        ...state,
        loading: true,
        subscription: null,
      };

    case FETCH_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        subscription: action.payload,
        loading: false,
      };

    case FETCH_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default subscriptionsReducer;