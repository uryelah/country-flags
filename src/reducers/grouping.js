import {
  TOGGLE_DARK_THEME,
} from '../actions/subscription';

import { groupState } from './InitialState';

const groupingReducer = (state = groupState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      return {
        ...state,
        dark: !state.dark,
      };

    default:
      return state;
  }
};

export default groupingReducer;