import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGraph } from '../actions';

export default class Query extends Component {
  getGoldberg(id) {
    this.props.dispatch(getGraph(`{
      goldberg(id: ${id}) {
        id,
        character,
        actor,
        traits,
        role
      }
    }`));
  }


  renderGoldberg() {
    const { store } = this.props;
    const isFetching = store.get('fetching');
    const {character, actor, role, traits }  = store.get('data').toObject();

    if (isFetching) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <h3>{character}</h3>
        <p>{actor}</p>
        <p>{role}</p>
        <p>{traits}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        id: <input
          onKeyDown={(e) => {
            if (e.keyCode === 13)
              this.getGoldberg(e.target.value)
          }}
        />
        {this.renderGoldberg()}
      </div>
    );
  }
}
