import { userActions } from "../actions/userActions";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "getUsers":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default userReducer;
