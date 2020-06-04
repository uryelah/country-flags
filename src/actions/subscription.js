export const FETCH_SUBSCRIPTION_BEGIN = 'FETCH_SUBSCRIPTION_BEGIN';
export const FETCH_SUBSCRIPTION_SUCCESS = 'FETCH_SUBSCRIPTION_SUCCESS';
export const FETCH_SUBSCRIPTION_FAILURE = 'FETCH_SUBSCRIPTION_FAILURE';
export const STORE_SUBSCRIPTION_ITEM = 'STORE_SUBSCRIPTION_ITEM';
export const GROUP_BY_GRADE = 'GROUP_BY_GRADE';
export const GROUP_BY_MACQUARIE = 'GROUP_BY_MACQUARIE';
export const GROUP_BY_AP = 'GROUP_BY_AP';
export const TOGGLE_SORT = 'TOGGLE_SORT';
export const FILTER_BY = 'FILTER_BY';
export const TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME';

const toggleDarkTheme = () => ({
  type: TOGGLE_DARK_THEME,
});

const toggleSort = sortDirection => ({
  type: TOGGLE_SORT,
  sortDirection,
});

const filterBy = strokeNumber => ({
  type: FILTER_BY,
  strokeNumber,
});

const groupByGrade = () => ({
  type: GROUP_BY_GRADE,
});

const groupByMacquarie = () => ({
  type: GROUP_BY_MACQUARIE,
});

const groupByAP = () => ({
  type: GROUP_BY_AP,
});

const fetchSubscriptionBegin = subscriptionId => ({
  type: FETCH_SUBSCRIPTION_BEGIN,
  subscriptionId,
});

const fetchSubscriptionSuccess = (payload, item) => ({
  type: FETCH_SUBSCRIPTION_SUCCESS,
  payload,
  item,
});

const fetchSubscriptionFailure = error => ({
  type: FETCH_SUBSCRIPTION_FAILURE,
  payload: error,
});

const storeSubscriptionItem = payload => ({
  type: STORE_SUBSCRIPTION_ITEM,
  payload,
});

function handleErrors(response) {
  if (!response.ok) { throw Error(JSON.stringify(response)); }
  return response;
}

function fetchSubscription(subscriptionEndpointUrl, options, item = false) {
  return dispatch => {
    dispatch(fetchSubscriptionBegin(subscriptionEndpointUrl, options));

    setTimeout(() => fetch(subscriptionEndpointUrl, options)
      .then(handleErrors).then(res => res.json()).then(json => {
        dispatch(fetchSubscriptionSuccess(json, item));
      })
      .catch(error => {
        dispatch(fetchSubscriptionFailure(`${error}`));
      }), 1000);
  };
}

export {
  toggleSort,
  filterBy,
  groupByGrade,
  groupByMacquarie,
  groupByAP,
  toggleDarkTheme,
  fetchSubscription,
  fetchSubscriptionBegin,
  fetchSubscriptionSuccess,
  fetchSubscriptionFailure,
  storeSubscriptionItem,
};