import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AuthenticateService from "../../services/authenticate";
import LoginDialog from "../../components/client/login/LoginDialog";
import { Context } from "../contexts/userContext";
import axios from "../axios";

export default function Login(props) {
  const router = useRouter()

  const { login, isLogged, userData, setType, type } = useContext(Context);
  const [dialogOpen, setDialogOpen] = useState(true);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const methods = useForm();

  const onSubmit = async (data) => {
    try {
      // const response = await AuthenticateService.login(data);

      const {data} = await axios.post("/auth/login", {
        username,
        password
      })

      setType(data.type)
      router.push("/")
      // TRATAMENTO DE ERRO


      // login && login(data.access_token, { ...data });
      
      login(data.access_token, { ...data })

/*       debugger
      login && login(response.access_token, { ...response });
      debugger
      console.log("response", response);
      return;
      if(response.type == "client"){
        router.push("/")
      }
      setDialogOpen(false); */
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoBack = () => {
    router && router.push('/');
  };

  return (
    <>
        <LoginDialog fullScreen={false} open={dialogOpen} onSubmit={onSubmit} setUsername={setUsername} setPassword={setPassword} onClose={handleGoBack}/>
    </>
  );
}
