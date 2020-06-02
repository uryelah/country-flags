import {
  GROUP_BY_GRADE,
  GROUP_BY_MACQUARIE,
  GROUP_BY_AP,
  TOGGLE_SORT,
  FILTER_BY,
} from '../actions/subscription';

import { groupState } from './InitialState';

const groupingReducer = (state = groupState, action) => {
  switch (action.type) {
    case TOGGLE_SORT:
      return {
        ...state,
        sorting: action.sortDirection,
      };

    case FILTER_BY:
      return {
        ...state,
        filter: action.strokeNumber,
      };

    case GROUP_BY_GRADE:
      return {
        ...state,
        groupBy: [1, 2, 3, 4, 5, 6],
      };

    case GROUP_BY_MACQUARIE:
      return {
        ...state,
        groupBy: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      };

    case GROUP_BY_AP:
      return {
        ...state,
        groupBy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      };

    default:
      return state;
  }
};

export default groupingReducer;