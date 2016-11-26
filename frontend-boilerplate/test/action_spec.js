import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/action/counter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('(async actions)', () => {
  it('delayIncrement', async () => {
    const store = mockStore({counter: 0});

    await store.dispatch(actions.delayIncrement());

    expect(store.getActions(), [
      { type: actions.types.INCREMENT },
    ]);
  });
});
