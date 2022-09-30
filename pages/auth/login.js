import React, { useEffect, useState } from "react";
import router from "next/router";
import { Controller, useForm } from "react-hook-form";
import AuthenticateService from "../../../services/authenticate";
import LoginDialog from "../../../components/client/login/LoginDialog";
import useAuthenticate from "../../../hooks/useAuthenticate";
export default function Login({userData}) {
  const [isLogged, setIsLogged] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(true);
  const methods = useForm();
  const {login: onLogin} = useAuthenticate();
  const onSubmit = async (data) => {
    try {
      const response = await AuthenticateService.login(data);
      console.log("response", response);
      onLogin && await onLogin(response.access_token, {...response});
      if(response.type == "client"){
        router.push("/")
      }
      setDialogOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
        <LoginDialog fullScreen={false} open={dialogOpen} onSubmit={onSubmit} onClose={handleGoBack}/>
    </>
  );
}
