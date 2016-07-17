import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import * as actionCreators from '../action/counter';

export function CounterApp(props) {
  return (
    <div>
      <div>{props.counter}</div>
      <RaisedButton label="+" onTouchTap={props.increment} />
      {' '}
      <RaisedButton label="-" onTouchTap={props.decrement} />
    </div>
  );
}
CounterApp.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CounterApp);
