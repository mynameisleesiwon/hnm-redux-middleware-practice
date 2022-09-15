let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

function authentiateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    case "LOGOUT":
      return {
        ...state,
        id: "",
        password: "",
        authenticate: false,
      };
    default:
      return { ...state };
  }
}

export default authentiateReducer;
