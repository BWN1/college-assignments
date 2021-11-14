import { useFetch } from './useFetch';

export const useCategories = () => {
  const { data, loading } = useFetch('categories');

  if (loading) return null;

  return data.map((category) => ({
    display: category.charAt(0).toUpperCase() + category.slice(1),
    link: `/categories/${category}`,
  }));
};
