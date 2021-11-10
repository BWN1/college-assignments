import { useEffect, useState } from 'react';
import { API_URL } from '../staticConfig';

export const useFetch = (apiRoute) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/api/${apiRoute}/`);
      if (response.ok) {
        const { data } = await response.json();
        setData(data);
      }
    };

    fetchData();
  }, [apiRoute]);

  return data;
};
