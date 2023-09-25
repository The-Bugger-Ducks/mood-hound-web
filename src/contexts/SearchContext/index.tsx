import { createContext, FC, useState } from "react";
import { SearchContextProps, SearchProviderProps } from "./props";

export const SearchContext = createContext({} as SearchContextProps);

export const SearchProvides: FC<SearchProviderProps> = ({ children }) => {
  const [valueToSearch, setValueToSearch] = useState<string | undefined>();

  const updateValueToSearch = (newValueToSearch: string | undefined) => {
    setValueToSearch(newValueToSearch);
  };

  return (
    <SearchContext.Provider value={{ valueToSearch, updateValueToSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
