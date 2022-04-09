import React, { useState, useEffect } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: 'Lami',
    content: 'hi',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: 'Hong',
    content: 'sad',
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: 'Lee',
    content: 'good',
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: 'Kim',
    content: 'not bad',
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: 'Park',
    content: 'umm..',
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
