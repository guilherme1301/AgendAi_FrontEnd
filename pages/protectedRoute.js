import { useContext, useEffect } from "react";
import { Context } from "./contexts/userContext";
import { useRouter } from "next/router";

export const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { isLogged, isLoading } = useContext(Context);
  console.log("Protected Router: isLogged = ", isLogged);

  if(isLogged != undefined){
    if (!isLogged) {
      if(router && router.pathname != "/auth/login" && router.pathname != "/auth/registration" && router.pathname != "/"){
          console.log("Router pathname: ", router && router.pathname);
          if(router.isReady){
            router.push("/");
          }
      }
      return children;
    }
    return children;
  }
};
