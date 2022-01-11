import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoaing] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/' + id)
      .then((response) => {
        setUser(response.data);
        setLoaing(false);
      });
  }, []);

  const userDetail = loading ? (
    <Spinner />
  ) : (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
    </div>
  );

  return (
    <>
      <h1>User 정보</h1>
      {userDetail}
    </>
  );
};

export default User;
