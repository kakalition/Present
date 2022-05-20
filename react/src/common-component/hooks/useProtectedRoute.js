import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useProtectedRoute() {
  const [user, setUser] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    axios.get('/api/getUser')
      .then((response) => {
        if (response.data === null) navigateTo('/register');
        setUser(response.data);
      });
  }, []);

  return user;
}
