import { isAxiosError } from "axios";

import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";

interface SigninResponse {
  accessToken: string;
}

class AuthRequests {
    async signIn(email: string, password: string) {
    try {
      const payload = {email, password}

      const { data } = await api.post<SigninResponse>(EndpointsEnum.AUTH_SIGNIN, payload);

      return data;
    } catch (error) {
      console.log("ERROR on signIn: ", error);
      if (isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
            return error.response.data?.message
          }
        }
      }
      return "error";
    }
  }
}

export default new AuthRequests();
