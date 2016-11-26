export const types = {
  INCREMENT: 'counter/INCREMENT',
  DECREMENT: 'counter/DECREMENT',
};

export const increment = () => ({
    type: types.INCREMENT,
});

export const decrement = () => ({
    type: types.DECREMENT,
});

export const delayIncrement = () => async (dispatch) => {
  await delay(500);
  dispatch(increment());
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
