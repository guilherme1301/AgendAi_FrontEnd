import React, { useState, useCallback, useEffect, memo } from "react";
import jwtDecode from "jwt-decode";
import { EventEmitter } from "../services/emitter";
import AuthenticateService from "../services/authenticate";
const LOCALSTORAGE_KEY = "auth_token";
const AUTH_DATA = "auth_data";

export const getTokenSync = () => localStorage.getItem(LOCALSTORAGE_KEY);
export const emmitLogout = () => EventEmitter.emit("logout");

export default () => {
  const [token, setToken] = useState();
  const userLogged = token && jwtDecode(token);
  const [userData, setUserData] = useState();
  // JSON.parse(localStorage.getItem(AUTH_DATA))
  // localStorage.getItem(LOCALSTORAGE_KEY)

  const fetchUser = async function (token) {
    debugger
    try{
      const user = await AuthenticateService.getUserData(token);
      if (user && user.user) {
        return user.user;
      }
    }catch(err){
      return null
    }
  }

  const getUser = async (tokenArg) => {
    debugger
    if (!!localStorage.getItem(AUTH_DATA) && localStorage.getItem(AUTH_DATA) != 'undefined') {
      return JSON.parse(localStorage.getItem(AUTH_DATA));
    } else {
      return Promise.resolve(fetchUser(tokenArg || token))
    }
  }

  const storeUserData = async function (tokenArg){
    const user = await getUser(tokenArg)
    const stringifyUserData = JSON.stringify(user);
    localStorage.setItem(AUTH_DATA, stringifyUserData);
    setUserData(JSON.parse(stringifyUserData));
    EventEmitter.emit("login-change", tokenArg);
  }

  const login = useCallback(
    (tokenArg, data) => {
      try {
        debugger;
        jwtDecode(tokenArg);
        setToken(tokenArg);
        localStorage.setItem(LOCALSTORAGE_KEY, tokenArg);
        if (!userData || !data){
          const userType = {type: data.type};
          localStorage.setItem(AUTH_DATA, JSON.stringify(userType))
          setUserData(userType)
          EventEmitter.emit("login-change", tokenArg);
        }
          //storeUserData(tokenArg)
      } catch (err) {
        return;
      }
    },
    [token, userLogged, userData]
  );

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(LOCALSTORAGE_KEY);
      localStorage.removeItem(AUTH_DATA);
      setUserData(null);
      setToken(null);
      window.location.reload();
    } catch (err) {
      return;
    }
  }, [token, userLogged]);

  const onChangeToken = (newToken) => setToken(newToken);

  useEffect(() => {
    EventEmitter.on("login-change", onChangeToken);
    EventEmitter.on("logout", logout);
    return () => {
      EventEmitter.off("login-change", onChangeToken);
      EventEmitter.off("logout", logout);
    };
  }, [token]);

  return {
    isLogged: !!token,
    token,
    userLogged,
    userData,
    getUser,
    login,
    logout,
  };
};
