import { createContext, useState } from "react";

interface DashboardContextValue {
  state?: string;
  setState: (newState?: string) => void;

  topic?: string;
  setTopic: (newTopic?: string) => void;

  dateStart?: Date;
  setDateStart: (newDateStart?: Date) => void;

  dateEnd?: Date;
  setDateEnd: (newDateEnd?: Date) => void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [topic, setTopic] = useState<string | undefined>();
  const [state, setState] = useState<string | undefined>();
  const [dateStart, setDateStart] = useState<Date | undefined>();
  const [dateEnd, setDateEnd] = useState<Date | undefined>();

  return (
    <DashboardContext.Provider
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
    </DashboardContext.Provider>
  );
}
