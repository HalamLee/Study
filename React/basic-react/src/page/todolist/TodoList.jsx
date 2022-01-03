import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    innerValue: '',
    // 입력받은 값
    lastLists: [],
    // list 배열
  };

  getInput = (e) => {
    this.setState({
      innerValue: e.target.value,
      // 받은 값 저장
    });
  };

  add = () => {
    const { innerValue, lastLists } = this.state;
    let newList = [...lastLists];
    // 구조분해할당 >> js
    // add 버튼 누르면 배열에 담기
    newList.push(innerValue);
    // newList >> [입력한 값 , , , ]
    // 배열에 추가
    this.setState({
      innerValue: '',
      lastLists: newList,
      // state의 변화 >> render >> 다시 그린다
      // state에 새로운 배열 저장
    });
  };

  update = () => {
    const { lastLists } = this.state;
    lastLists.map((list, index) => <div>{list}</div>);
  };

  render() {
    const { innerValue, lastLists } = this.state;
    const { getInput, add } = this;

    return (
      <>
        <div className="wholeWrapper">
          <div>{'TodoList'}</div>
          <input type="text" onChange={getInput} value={innerValue} />
          <button onClick={add}>{'ADD'}</button>
          <div className="table">
            {lastLists.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;
