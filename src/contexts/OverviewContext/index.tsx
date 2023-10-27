import { createContext, useState } from "react";

interface OverviewContextValue {
  state?: string;
  setState: (newState?: string) => void;

  topic?: string;
  setTopic: (newTopic?: string) => void;

  dateStart?: Date;
  setDateStart: (newDateStart?: Date) => void;

  dateEnd?: Date;
  setDateEnd: (newDateEnd?: Date) => void;
}

export const OverviewContext = createContext({} as OverviewContextValue);

export function OverviewProvider({ children }: { children: React.ReactNode }) {
  const [topic, setTopic] = useState<string | undefined>();
  const [state, setState] = useState<string | undefined>();
  const [dateStart, setDateStart] = useState<Date | undefined>();
  const [dateEnd, setDateEnd] = useState<Date | undefined>();

  return (
    <OverviewContext.Provider
      value={{
        setDateEnd,
        dateEnd,

        setDateStart,
        dateStart,

        setState,
        state,

        setTopic,
        topic,
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
}
