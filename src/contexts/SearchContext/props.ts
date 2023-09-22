interface SearchContextProps {
  valueToSearch: string | undefined;
  updateValueToSearch: (value: string | undefined) => void;
}

interface SearchProviderProps {
  children: React.ReactNode;
}
