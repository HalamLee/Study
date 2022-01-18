import React from 'react';
import { connect } from 'react-redux';

const Subscribers = (props) => {
  return (
    <div className="items">
      <p>구독자 수: {props.count}</p>
      <button>구독하기!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Subscribers);
