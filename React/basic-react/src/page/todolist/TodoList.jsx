import React, { Component } from 'react';
// import '../../css/todolist/TodoList.css';
import styled from 'styled-components';

// js 영역 >> 사용x
// 로직 x
// 컴포넌트 생성 o

// styled.(html 태그)`
// css styling
// `
// styled component
const NewDiv = styled.div.attrs(({ state }) => ({
  // state >> true or false
  check: state,
}))`
  background-color: ${(props) => (props.check ? 'gray' : 'teal')};
  text-decoration: ${(props) => (props.check ? 'none' : 'line-through')};
  margin-bottom: 10px;
`;

class TodoList extends Component {
  state = {
    innerValue: '',
    ID: 3,

    // 입력받은 값
    lastLists: [
      { id: 0, text: 'aaa', state: true },
      // 배열 요소 그 자체를 div의 text 그리기
      // 배열요소 >> 객체
      { id: 1, text: 'bbb', state: true },
      { id: 2, text: 'ccc', state: true },
    ],
    // list 배열
  };

  getInput = (e) => {
    this.setState({
      innerValue: e.target.value,
      // 받은 값 저장
    });
  };

  add = () => {
    const { innerValue, lastLists, ID } = this.state;
    let newList = [...lastLists];
    // 구조분해할당 >> js
    // add 버튼 누르면 배열에 담기
    newList.push({ id: ID, text: innerValue, state: true });
    // newList >> [입력한 값 , , , ]
    // 배열에 추가
    this.setState({
      innerValue: '',
      ID: ID + 1,
      lastLists: newList,
      // state의 변화 >> render >> 다시 그린다
      // state에 새로운 배열 저장
    });
  };

  remove = (e) => {
    const { lastLists } = this.state;
    let newList = [...lastLists];
    const ID = e.target.parentNode.id;
    // newList.splice(ID, 1);
    newList = newList.filter((item) => item.id !== Number(ID)); // number
    // id >> 컴포넌트의 속성으로 number 값이 들어가면 string으로 변환된다.
    this.setState({
      ...this.state,
      lastLists: newList,
    });
  };

  check = (e) => {
    const { lastLists } = this.state;
    let newList = [...lastLists];
    const ID = e.target.parentNode.id;
    newList[ID] = {
      ...newList[ID],
      state: !newList[ID].state,
    };
    this.setState({
      lastLists: newList,
    });
  };

  render() {
    const { innerValue, lastLists } = this.state;
    const { getInput, add, remove, check } = this;

    return (
      <>
        <div className="wholeWrapper">
          <div>{'TodoList'}</div>
          <input type="text" onChange={getInput} value={innerValue} />
          <button onClick={add}>{'ADD'}</button>
          <div className="table">
            {lastLists.map((list, index) => (
              <NewDiv id={list.id} state={list.state}>
                <div onClick={check}>{list.text}</div>
                <button onClick={remove}>{'remove'}</button>
              </NewDiv>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;
