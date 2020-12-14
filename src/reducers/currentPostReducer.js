const currentPostReducer = (state = null, action) => {
  switch (action.type) {
    case "setCurrentPost":
      return action.payload;

    default:
      return state;
  }
};

export default currentPostReducer;
