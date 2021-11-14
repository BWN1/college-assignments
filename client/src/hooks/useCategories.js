import { useFetch } from './useFetch';
import { API_URL_PATHS } from '../staticConfig';

export const useCategories = () => {
  const { data, loading } = useFetch(API_URL_PATHS.categories);

  if (loading) return null;

  return data.map((category) => ({
    display: category.charAt(0).toUpperCase() + category.slice(1),
    link: `/categories/${category}`,
  }));
};
