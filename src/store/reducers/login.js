export default function login(state = "", action) {
  switch (action.type) {
    case "LOGIN":
      return action.user;
      break;
    case "LOGOUT":
      return "";
      break;

    default:
      break;
  }
  return state;
}
