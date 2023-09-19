import api from "../../services/api.service";
import EndpointsEnum from "../enums/endpoints.enum";
import UserRoleEnum from "../enums/userRole.enum";
import UserInterface from "../interfaces/user.interface";

class UserRequests {
  async search(name?: string, email?: string, role?: UserRoleEnum) {
    try {
      let query = "?";

      if (name) query += `&name=${name}`;
      if (email) query += `&email=${email}`;
      if (role) query += `&role=${role}`;

      const response = await api.get(EndpointsEnum.USER_SEARCH + query);

      return response.data as UserInterface[];
    } catch (error) {
      console.log("ERROR on search by users: ", error);
      return "error";
    }
  }

  async remove(id: string) {
    try {
      const response = await api.delete(EndpointsEnum.USER_DELETE + `/${id}`);

      return response.data;
    } catch (error) {
      console.log("ERROR on delete user: ", error);
      return "error";
    }
  }
}

export default new UserRequests();
