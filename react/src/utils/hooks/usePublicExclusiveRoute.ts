import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function usePublicExclusiveRoute() {
  const _navigateTo = useNavigate();

  useEffect(() => {
    axios.get('/api/getUser')
      .then((response) => {
        if (response.data !== '') _navigateTo('/home');
      });
  }, [_navigateTo]);
}
