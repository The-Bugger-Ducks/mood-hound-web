class SessionHandler {
  clearRecords() {
    sessionStorage.clear();
  }

  setAuthToken(token: string) {
    sessionStorage.setItem("@moodhound:auth_token", JSON.stringify(token));
  }

  getAuthToken() {
    const sessionInfo = sessionStorage.getItem("@moodhound:auth_token");

    if (!sessionInfo) return null;

    const sessionInfoString: string = JSON.parse(sessionInfo);

    return sessionInfoString;
  }
}

export default new SessionHandler();
