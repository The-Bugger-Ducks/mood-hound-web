const sessionStorageKeys = {
  AUTH_TOKEN: "@moodhound:auth_token",
};

class SessionHandler {
  clearRecords() {
    sessionStorage.clear();
  }

  setAuthToken(token: string) {
    sessionStorage.setItem(sessionStorageKeys.AUTH_TOKEN, JSON.stringify(token));
  }

  getAuthToken() {
    const sessionInfo = sessionStorage.getItem(sessionStorageKeys.AUTH_TOKEN);

    if (!sessionInfo) return null;

    const sessionInfoString: string = JSON.parse(sessionInfo);

    return sessionInfoString;
  }
}

export default new SessionHandler();
