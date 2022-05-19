import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    fetch('http://localhost/api/getUser')
      .then((response) => response.json())
      .then((json) => {
        if (json === null) navigateTo('/register');
        setUser(json);
      });
  }, []);

  return user;
}
