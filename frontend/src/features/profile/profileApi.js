import apiClient from "../../api/apiClient";
export const profileApi = {
  getProfile: async () => {
    try {
      const response = await apiClient.get("http://localhost:4000/api/v1/user");
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
