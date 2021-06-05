import React, { useReducer, createContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MenuComp from "./component/MenuComp";
import LoginComp from "./component/LoginComp";
import HomeComp from "./component/HomeComp";
import RegisterComp from "./component/RegisterComp";
import Transaksi from "./component/Transaksi";
import Publik from "./component/Publik";

// context
export const AuthContext = createContext();

// inisiasi state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{ state, dispatch }}>
          <MenuComp />

          <Route exact path="/" component={Publik} />
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/dashboard" component={HomeComp} />
          <Route exact path="/transaksi" component={Transaksi} />
          <Route exact path="/register" component={RegisterComp} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
