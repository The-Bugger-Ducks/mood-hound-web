export interface SearchContextProps {
  valueToSearch: string | undefined;
  updateValueToSearch: (value: string | undefined) => void;
}

export interface SearchProviderProps {
  children: React.ReactNode;
}
