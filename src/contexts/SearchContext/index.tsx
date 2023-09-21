import { createContext, FC, useState } from "react";

export const SearchContext = createContext<SearchContextProps | null>(null);

export const SearchProvides: FC<SearchProviderProps> = ({ children }) => {
  const [valueToSearch, setValueToSearch] = useState<string | undefined>();

  const getValueToSearch = () => {
    return valueToSearch;
  };

  const updateValueToSearch = (newValueToSearch: string | undefined) => {
    setValueToSearch(newValueToSearch);
  };

  return (
    <SearchContext.Provider value={{ getValueToSearch, updateValueToSearch }}>
      {children}
    </SearchContext.Provider>
  );
};