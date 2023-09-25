import { SessionStorageKeysEnum } from "../enums/sessionStorageKeys.enum";

class SessionHandler {
  clearRecords() {
    sessionStorage.clear();
  }

  setAuthToken(token: string) {
    sessionStorage.setItem(SessionStorageKeysEnum.AUTH_TOKEN, JSON.stringify(token));
  }

  getAuthToken() {
    const sessionInfo = sessionStorage.getItem(SessionStorageKeysEnum.AUTH_TOKEN);

    if (!sessionInfo) return null;

    const sessionInfoString: string = JSON.parse(sessionInfo);

    return sessionInfoString;
  }
}

export default new SessionHandler();
