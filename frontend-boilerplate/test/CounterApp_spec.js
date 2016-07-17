import expect, { createSpy } from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { CounterApp } from '../src/component/CounterApp';

describe('CounterApp', () => {
  let _props;
  let _renderer;
  let _output;
  beforeEach(() => {
    _props = {
      increment: createSpy(),
      decrement: createSpy(),
    };
    _renderer = TestUtils.createRenderer();
    _renderer.render(<CounterApp {..._props} />);
    _output = _renderer.getRenderOutput();
  });

  it('should call increment()', () => {
    const btn = _output.props.children[1];
    btn.props.onTouchTap();
    expect(_props.increment.calls.length).toBe(1);
  });

  it('should call decrement()', () => {
    const btn = _output.props.children[3];
    btn.props.onTouchTap();
    expect(_props.decrement.calls.length).toBe(1);
  });
});
