import expect, { createSpy } from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { App } from '../src/components/App';

describe('<App />', () => {
  let _props;
  let _renderer;
  let _output;
  beforeEach(() => {
    _props = {
      increment: createSpy(),
      decrement: createSpy(),
      delayIncrement: createSpy(),
    };
    _renderer = TestUtils.createRenderer();
    _renderer.render(<App {..._props} />);
    _output = _renderer.getRenderOutput();
  });

  it('should call increment()', () => {
    const btn = _output.props.children[1];
    btn.props.onClick();
    expect(_props.increment.calls.length).toBe(1);
  });

  it('should call decrement()', () => {
    const btn = _output.props.children[3];
    btn.props.onClick();
    expect(_props.decrement.calls.length).toBe(1);
  });

  it('should call delayIncrement()', () => {
    const btn = _output.props.children[5];
    btn.props.onClick();
    expect(_props.delayIncrement.calls.length).toBe(1);
  });
});
