import axios from "axios";
import "@babel/polyfill";
import { showAlert } from "./alerts";

export const updateSettings = async (data, type) => {
  try {
    const endPoint = type === "password" ? "updatePassword" : "updateMe";
    const res = await axios({
      method: "PATCH",
      url: `http://127.0.0.1:3000/api/v1/users/${endPoint}`,
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", `${type} Updated successfully!`.toUpperCase());
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
