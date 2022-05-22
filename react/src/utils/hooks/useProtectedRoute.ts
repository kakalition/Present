/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useProtectedRoute() {
  const [user, setUser] = useState({ name: null });
  const navigateTo = useNavigate();

  useEffect(() => {
    axios.get('/api/getUser')
      .then((response) => {
        if (response.data === '') navigateTo('/login');
        setUser(response.data);
      });
  }, [navigateTo]);

  return user;
}
