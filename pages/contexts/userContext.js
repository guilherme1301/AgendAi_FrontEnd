import jwtDecode from "jwt-decode";
import {
  useState,
  useEffect,
  useReducer,
  createContext,
  useCallback,
  useMemo,
} from "react";
// import { user } from "../../reducers/user";
// import AuthenticateService from "../../services/authenticate";
import ServicesService from "../../services/models/services";
// import { EventEmitter } from "../../services/emitter";

// initial state
const initialState = {
  user: null,
};
const AUTH_KEY = "auth_token";
const AUTH_DATA = "auth_data";

// create context
const Context = createContext(initialState);

// combine reducer function
// const combineReducers =
//   (...reducers) =>
//   (state, action) => {
//     for (let i = 0; i < reducers.length; i++)
//       state = reducers[i](state, action);
//     return state;
//   };

// context provider
const Provider = ({ children }) => {
//   const [state, dispatch] = useReducer(combineReducers(user), initialState); // pass more reducers combineReducers(user, blogs, products)
  const [user, setUser ] = useState();
  const [token, setToken] = useState();

  // JSON.parse(localStorage.getItem(AUTH_DATA))
  // localStorage.getItem(AUTH_KEY)
  const fetchUserData = async function (userToken) {
    // if (!userToken || userToken === undefined) {
    //   logout();
    //   console.log("Context Provider: user", user);
    //   return;
    // }

    try {
      const hasToken = localStorage.getItem(AUTH_KEY)
      const hasUser = localStorage.getItem(AUTH_DATA)

      if(hasUser && hasToken){
        setUser(hasUser)
        setToken(hasToken)
        return
      }

      const resp = await ServicesService.list(userToken);
      //   const resp = await AuthenticateService.getUserData(userToken);
      return;
      if (resp && resp.user) {
        login(userToken, resp);
      } else {
        logout();
      }
    } catch (err) {
      console.log(err);
      logout();
    }
  };

  const getUserData = async (tokenArg) => {
    // Check if token is available and test it
    const userToken = localStorage.getItem(AUTH_KEY) || token;
    if (!userToken){setUser(false), logout()}
    else {
      fetchUserData(userToken);
    }
  };
  // if (
  //   !!localStorage.getItem(AUTH_DATA) &&
  //   localStorage.getItem(AUTH_DATA) != "undefined"
  // ) {
  //     const userData_temp = JSON.parse(localStorage.getItem(AUTH_DATA));
  //     if(!!userData_temp){
  //         dispatch("LOGGED_IN_USER", {payload: userData_temp})
  //     }
  //   return ;
  // } else {
  //   return Promise.resolve(fetchUserData(tokenArg));
  // }

  //   const storeUserData = async function (tokenArg) {
  //     const user = await getUser(tokenArg);
  //     const stringifyUserData = JSON.stringify(user);
  //     localStorage.setItem(AUTH_DATA, stringifyUserData);
  //     // setUserData(JSON.parse(stringifyUserData));
  //     // EventEmitter.emit("login-change", tokenArg);
  //   };

  const login = useCallback(
    (tokenArg, data) => {
      try {
        const isTokenValid = jwtDecode(tokenArg);

        // Set token
        setToken(tokenArg);
        localStorage.setItem(AUTH_KEY, tokenArg);

        if (data && data != undefined) {
        //   dispatch("LOGGED_IN_USER", data.user);
          setUser(data.user);
          localStorage.setItem(AUTH_DATA, JSON.stringify(data.user));
          //   EventEmitter.emit("login-change", tokenArg);
          //   setUserData(userType);
        }
        //storeUserData(tokenArg)
      } catch (err) {
        return err;
      }
    },
    [token, user]
  );

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(AUTH_DATA);
      dispatch("LOGGED_OUT_USER");
      setToken(null);
      window.location.reload();
    } catch (err) {
      return;
    }
  }, [token]);

  const onChangeToken = (newToken) => setToken(newToken);

  //   useEffect(() => {
  //     EventEmitter.on("login-change", onChangeToken);
  //     EventEmitter.on("logout", logout);
  //     return () => {
  //       EventEmitter.off("login-change", onChangeToken);
  //       EventEmitter.off("logout", logout);
  //     };
  //   }, [token]);

  useEffect(() => {
    async function checkUser() {
      if (!user || user == undefined) {
        return await getUserData();
        //   setUserData(JSON.parse(localStorage.getItem(AUTH_DATA)));
      }
      return
    }
    if(localStorage.getItem(AUTH_KEY)){
        setToken(localStorage.getItem(AUTH_KEY));
    }
    checkUser();
  }, []);

  const contextValue = useMemo(
    () => ({
      login,
      logout,
      isLogged: user,
      userData: user,
    }),
    [login, logout, token, user]
  );
  
  console.log("Context Provider: user", user);
  console.log("Context Provider: token", token);
  console.log("ProviderValue: ", contextValue);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, Provider };
