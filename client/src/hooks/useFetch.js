import { useEffect, useState } from 'react';
import { WEBSITE_URL } from '../staticConfig';

export const useFetch = (apiRoute) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${WEBSITE_URL}/api/${apiRoute}/`);
      if (response.ok) {
        const { data } = await response.json();
        setData(data);
      }
    };

    fetchData();
  }, [apiRoute]);

  return data;
};
