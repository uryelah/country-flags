export const FETCH_SUBSCRIPTION_BEGIN = 'FETCH_SUBSCRIPTION_BEGIN';
export const FETCH_SUBSCRIPTION_SUCCESS = 'FETCH_SUBSCRIPTION_SUCCESS';
export const FETCH_SUBSCRIPTION_FAILURE = 'FETCH_SUBSCRIPTION_FAILURE';
export const STORE_SUBSCRIPTION_ITEM = 'STORE_SUBSCRIPTION_ITEM';
export const TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME';

const toggleDarkTheme = () => ({
  type: TOGGLE_DARK_THEME,
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
  toggleDarkTheme,
  fetchSubscription,
  fetchSubscriptionBegin,
  fetchSubscriptionSuccess,
  fetchSubscriptionFailure,
  storeSubscriptionItem,
};