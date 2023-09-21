interface SearchContextProps {
  getValueToSearch: () => string | undefined;
  updateValueToSearch: (value: string | undefined) => void;
}

interface SearchProviderProps {
  children: React.ReactNode;
}
