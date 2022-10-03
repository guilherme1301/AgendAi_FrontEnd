import React, { useContext, useEffect, useState } from "react";
import router from "next/router";
import { Controller, useForm } from "react-hook-form";
import AuthenticateService from "../../services/authenticate";
import LoginDialog from "../../components/client/login/LoginDialog";
import { Context } from "../contexts/userContext";
export default function Login(props) {
  const {  login, isLogged, userData } = useContext(Context);
  const [dialogOpen, setDialogOpen] = useState(true);
  const methods = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await AuthenticateService.login(data);
      login && login(response.access_token, { ...response });
      console.log("response", response);
      return;
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
