function login(id, password) {
  return (dispatch, getState) => {
    console.log("login success reducer");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT" });
  };
}

export const authenticateAction = { login, logout };
