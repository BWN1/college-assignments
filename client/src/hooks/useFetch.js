import { useEffect, useState } from 'react';
import { API_URL } from '../staticConfig';

export const useFetch = (apiRoute) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/${apiRoute}/`);
      if (response.ok) {
        const { data } = await response.json();
        setData(data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiRoute]);

  return { data, loading: isLoading };
};
