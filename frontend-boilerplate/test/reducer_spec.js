import expect from 'expect';
import { types } from '../src/action/counter';
import { counter } from '../src/reducer/counter';

describe('(Reducer)', () => {
  it('initial state is 0', () => {
    const state = counter(undefined, {});
    expect(state).toBe(0);
  });
  it('increment', () => {
    const state = 10;
    const action = {
      type: types.INCREMENT,
    };
    const nextState = counter(state, action);
    expect(nextState).toBe(11);
  });
  it('decrement', () => {
    const state = 10;
    const action = {
      type: types.DECREMENT,
    };
    const nextState = counter(state, action);
    expect(nextState).toBe(9);
  });
});
