import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoaing] = useState(true);
  const { id } = useParams();
  console.log('user :>> ', user);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/' + id)
      .then((response) => {
        setUser(response.data);
        setLoaing(false);
      });
  }, []);

  return (
    <>
      <h1>User 정보</h1>
      {loading ? <Spinner /> : null}
    </>
  );
};

export default User;
