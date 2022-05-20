import axios from 'axios';
import { useEffect } from 'react';

export default function useInitCsrf() {
  useEffect(() => {
    axios.get('/sanctum/csrf-cookie');
  });
}
