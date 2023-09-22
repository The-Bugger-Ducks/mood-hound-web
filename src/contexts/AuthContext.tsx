import { createContext, useCallback, useState } from "react";

import sessionHandler from "../utils/handlers/session.handler";


interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = sessionHandler.getAuthToken()

    return !!storedAccessToken;
  });

  const signin = useCallback((accessToken: string) => {
    sessionHandler.setAuthToken(accessToken)

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    sessionHandler.clearRecords()

    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signedIn: signedIn, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
