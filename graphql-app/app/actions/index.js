const startingRequest = () => ({
  type: 'STARTING_REQUEST',
});

const finishedRequest = (response) => ({
  type: 'FINISHED_REQUEST',
  response,
});

export const getGraph = (payload) => (dispatch) => {
  dispatch(startingRequest());
  return fetch(`/graphql?query=${payload}`)
    .then(response => response.json())
    .then(response => dispatch(finishedRequest(response)));
};
