import { Map } from 'immutable';

const immutableState = Map({
  fetching: false,
  data: Map({}),
});

export const queryReducer = (state = immutableState, action) => {
  switch (action.type) {
    case "STARTING_REQUEST":
      return state.set("fetching", true);
    case "FINISHED_REQUEST":
      return state
        .set("fetching", false)
        .set("data", Map(action.response.data.goldberg));
      default:
        return state;
  }
};

