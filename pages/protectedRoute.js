import { useContext, useEffect, useState } from "react";
import { Context, Provider } from "./contexts/userContext";
import LoginPage from "./auth/login";
import Dashboard from "./index";
import { useRouter } from "next/router";

export const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { isLogged, isLoading } = useContext(Context);
  console.log("Protected Router: isLogged = ", isLogged);

  if (!isLogged) {
    if(router && router.pathname != "/auth/login" && router.pathname != "/auth/registration" && router.pathname != "/"){
        console.log("Router pathname: ", router && router.pathname);
        router && router.push("/");
    }
    return children;
  }
  return children;
};