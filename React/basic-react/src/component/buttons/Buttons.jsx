import React, { Component } from 'react';

class Buttons extends Component {
  state = {};

  plus = () => {
    this.props.funcPlus();
  };

  minus = () => {
    this.props.funcMinus();
  };

  render() {
    const { plus, minus } = this;

    return (
      <>
        <button onClick={plus}>{'👍'}</button>
        <button onClick={minus}>{'👎'}</button>
      </>
    );
  }
}

export default Buttons;
