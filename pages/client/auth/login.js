import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import BasePage from "../../../components/pageComponents/basePage";
import styles from "../../../styles/Home.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import AuthenticateService from "../../../services/authenticate";
import LoginDialog from "../../../components/client/login/LoginDialog";
export default function Login({userData}) {
  const [isLogged, setIsLogged] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(true);
  const methods = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await AuthenticateService.login(data);
      console.log("response", response);
      // onLogin && await onLogin(response.access_token, {...response});
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
