import React, { useState } from 'react';
import User, { UserInt } from './components/User';
import './App.css';

const App: React.FC = () => {
  interface AllUsersInt {
    currentUser: UserInt;
    allUsers: Array<UserInt>;
  }

  const [usersState, setUsersState] = useState<AllUsersInt>({
    currentUser: { name: '', age: '', job: '', deleteUser: () => {} },
    allUsers: [],
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsersState({
      ...usersState,
      currentUser: {
        ...usersState.currentUser,
        [e.target.name]: e.target.value,
      },
    });
  };

  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setUsersState({
      currentUser: {
        name: '',
        age: '',
        job: '',
        deleteUser: () => {},
      },
      allUsers: [...usersState.allUsers, usersState.currentUser],
    });
  };

  const deleteHandler = (index: number): void => {
    const filterUsers = usersState.allUsers.filter((user, i) => {
      return index !== i;
    });

    setUsersState({
      ...usersState,
      allUsers: filterUsers,
    });
  };

  const allUsers = usersState.allUsers.map((user, i) => (
    <User
      key={i}
      name={user.name}
      age={user.age}
      job={user.job}
      deleteUser={() => deleteHandler(i)}
    />
  ));
  console.log(usersState);

  return (
    <div className="container">
      <h1>React with Typescript</h1>
      <form onSubmit={submitForm} className="card">
        <label htmlFor="userName">Name:</label>
        <input
          id="userName"
          required
          type="text"
          name="name"
          value={usersState.currentUser.name}
          onChange={onChangeHandler}
        />
        <label htmlFor="userAge">Age:</label>
        <input
          id="userAge"
          type="number"
          name="age"
          value={usersState.currentUser.age}
          onChange={onChangeHandler}
        />
        <label htmlFor="userJob">Job:</label>
        <input
          id="userJob"
          required
          type="text"
          name="job"
          value={usersState.currentUser.job}
          onChange={onChangeHandler}
        />

        <button type="submit" className="submitBtn">
          Add user
        </button>
      </form>
      {allUsers}
    </div>
  );
};

export default App;
