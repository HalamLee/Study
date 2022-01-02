import React, { Component } from 'react';
import Buttons from '../buttons/Buttons';

class Plus extends Component {
  state = {
    number: 0,
    name: 'LEE',
  };

  change = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1,
    });
  };

  changeMinus = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1,
    });
  };

  render() {
    const { number, name } = this.state;
    const { change, changeMinus } = this;

    return (
      <>
        <div>{name}</div>
        <div>{number}</div>
        <Buttons funcPlus={change} funcMinus={changeMinus}></Buttons>
      </>
    );
  }
}

export default Plus;
