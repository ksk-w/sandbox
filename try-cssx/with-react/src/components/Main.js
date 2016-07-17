import React, { Component } from 'react';
import CSSX from 'react-cssx';

export default class Main extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      rotation: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      let { rotation } = this.state;

      if (rotation >= 360) {
        rotation -= 360;
      }

      this.setState({
        rotation: rotation + 1,
      });
    }, 10);
  }

  css() {
    return (
      <style>
        div {
          text-align: center;
          padding-top: 200px;
        }
        h1 {
          (wom)transition: color .3s linear;
          color: black;
        }
        h1:hover {
          color: red;
        }
        h1 span {
          display: inline-block;
          color: blue;
          (wom)transform: rotateZ(`this.state.rotation`deg);
        }
      </style>
    );
  }

  render() {
    return (
      <CSSX styles={this.css()}>
        <div>
          <h1>Hello <span>CSSX</span></h1>
        </div>
      </CSSX>
    );
  }
}
