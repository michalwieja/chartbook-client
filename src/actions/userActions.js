import axios from "axios";
import { returnErrors } from "./errorActions";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: "USER_LOADING" });

  const token = getState().user.token;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["auth-token"] = token;
  }

  axios
    .get("/auth/user", config)
    .then((res) => dispatch({ type: "USER_LOADED", payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: "AUTH_ERROR" });
    });
};
