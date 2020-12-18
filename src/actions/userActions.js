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

export const register = ({ name, email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  axios
    .post("/auth/register", body, config)
    .then((res) => dispatch({ type: "REGISTER_SUCCESS", payload: res.data }))
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({ type: "REGISTER_FAIL" });
    });
};
