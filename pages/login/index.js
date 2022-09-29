import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import BasePage from "../../components/pageComponents/basePage";
import styles from "../../styles/Home.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import AuthenticateService from "../../services/authenticate";

export default function Login({ onLogin, userData }) {
  const [isLogged, setIsLogged] = useState(true);
  const methods = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await AuthenticateService.login(data);
      console.log("response", response);
      await onLogin(response.access_token, {...response});
      if(response.type == "client"){
        router.push("/")
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Grid container xs={12} justifyContent="center">
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid item xs={12}>
            <h2 className={styles.title}>Login</h2>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="username"
              control={methods.control}
              defaultValue="a"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="E-mail"
                  // type={"email"}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!methods.formState.errors.email}
                  helperText={
                    !!methods.formState.errors.email
                      ? methods.formState.errors.email?.message
                      : ""
                  }
                />
              )}
            />
            <Controller
              name="password"
              control={methods.control}
              //defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Senha"
                  fullWidth
                  type={"password"}
                  margin="normal"
                  error={!!methods.formState.errors.password}
                  helperText={
                    !!methods.formState.errors.password
                      ? methods.formState.errors.password?.message
                      : ""
                  }
                />
              )}
            />
          </Grid>

          <Grid item>
            <Link href={"/forgotPassword"}>
              <Button
                variant="text"
                color="inherit"
                style={{ textAlign: "left" }}
              >
                Esqueceu a senha?
              </Button>
            </Link>
          </Grid>
          {(!!methods.formState.errors.email ||
            !!methods.formState.errors.password) && (
            <Grid item xs={12}>
              <span style={{ color: "red" }}>Senha ou email inválido(s).</span>
            </Grid>
          )}
          <Grid container direction="row" style={{ height: "50px" }} mt={2}>
            <Grid item xs={6} pr={1}>
              <Button
                onClick={handleGoBack}
                variant="outlined"
                fullWidth
                style={{ height: "100%" }}
                color={"inherit"}
              >
                Voltar
              </Button>
            </Grid>
            <Grid item xs={6} pl={1}>
              <Button
                type="submit"
                variant="outlined"
                fullWidth
                style={{ height: "100%" }}
                color={"inherit"}
              >
                Entrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
