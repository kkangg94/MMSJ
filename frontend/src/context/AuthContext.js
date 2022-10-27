import { createContext, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

export const AuthContext = createContext();
export const authReducer = (state, action) => {
  // login logout case 나누기

  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log(state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
