import expect from 'expect';
import * as types from '../src/constants/conter';
import { increment, decrement } from '../src/action/counter';


describe('(Action)', () => {
  it('increment type', () => {
    const action = increment();
    expect(action).toEqual({
      type: types.INCREMENT,
    });
  });
  it('decrement type', () => {
    const action = decrement();
    expect(action).toEqual({
      type: types.DECREMENT,
    });
  });
});
