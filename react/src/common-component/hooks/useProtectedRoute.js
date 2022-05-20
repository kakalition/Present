/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useProtectedRoute() {
  const [_user, _setUser] = useState(null);
  const _navigateTo = useNavigate();

  useEffect(() => {
    axios.get('/api/getUser')
      .then((response) => {
        if (response.data === null) _navigateTo('/register');
        _setUser(response.data);
      });
  }, []);

  return _user;
}
