import api from "../../services/api.service";

import EndpointsEnum from "../enums/endpoints.enum";
import UserRoleEnum from "../enums/userRole.enum";

class UserRequests {
  async search(name?: string, email?: string, role?: UserRoleEnum) {
    try {
      let query = "?";

      if (name) query += `&name=${name}`;
      if (email) query += `&email=${email}`;
      if (role) query += `&role=${role}`;

      const response = await api.get(EndpointsEnum.USER_SEARCH + query);

      return response;
    } catch (error) {
      console.log("ERROR on search by users: ", error);
      return "error";
    }
  }
}

export default new UserRequests();
