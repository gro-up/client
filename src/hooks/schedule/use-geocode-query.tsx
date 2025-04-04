import { useEffect, useState } from 'react';

export const useGeocodeQuery = () => {
  const [queryValue, setQueryValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearch, setIsSearch] = useState(false);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQueryValue(e.target.value);

  const handleIsSearch = () => setIsSearch(true);

  useEffect(() => {
    if (isSearch) {
      setSearchQuery(queryValue);
      setIsSearch(false);
    }
  }, [isSearch, queryValue]);

  return { queryValue, searchQuery, handleIsSearch, handleQueryChange };
};
