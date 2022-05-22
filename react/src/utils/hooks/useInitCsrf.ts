import { useEffect } from 'react';
import axios from 'axios';

export default function useInitCsrf() {
  useEffect(() => {
    axios.get('/sanctum/csrf-cookie');
  });
}
