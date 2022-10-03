import React, { useContext, useEffect, useState } from "react";
import router from "next/router";
import { Controller, useForm } from "react-hook-form";
import AuthenticateService from "../../services/authenticate";
import RegistrationDialog from "../../components/client/login/registrationDialog";
import { Context } from "../contexts/userContext";
export default function Login(props) {
  const {  login, isLogged, userData } = useContext(Context);
  const [dialogOpen, setDialogOpen] = useState(true);
  const [inputUserData, setInputUserData] = useState();

  const methods = useForm();

  const handleInputUpdate = (data) => {
    debugger
    setInputUserData({...inputUserData, data})
    console.log("inputUserData", inputUserData)
  }

  const onSubmit = async (data) => {
    try {
        debugger;
        const response = await AuthenticateService.clientRegister(data);
        debugger;
        login && login(response.access_token, { ...inputUserData });
        console.log("response", response);
        return;
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
    router.push("/");
  };

  return (
    <>
        <RegistrationDialog fullScreen={false} open={dialogOpen} onSubmit={onSubmit} onClose={handleGoBack} onInputUpdate={handleInputUpdate} inputData={inputUserData}/>
    </>
  );
}