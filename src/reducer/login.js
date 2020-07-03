const defaultState = {
  isLogin: false,
  user: {
    account: "",
    pwd: "",
  },
};
export default (state = defaultState, action) => {
  if (action.type === "saveUser") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.isLogin = true;
    newState.user.account = action.value.username;
    newState.user.pwd = action.value.password;
    return newState;
  }
  return state;
};
