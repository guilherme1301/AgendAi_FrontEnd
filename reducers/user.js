export function user(state, action) {
    switch (action.type) {
      case "LOGGED_IN_USER":
        return { ...state, user: action.payload };
      case "LOGGED_OUT_USER":
        return { ...state, user: null };
      default:
        return state;
    }
  }