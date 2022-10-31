import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../../styles/Home.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";

export default function LoginForm({...props}) {
  const [isLogged, setIsLogged] = useState(true);
  const { onSubmit, onCancel, setUsername, setPassword } = props;
  const methods = useForm();

  const handleGoBack = () => {
    onCancel && onCancel() || router.back();
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid item xs={12}>
          <h2 className={styles.title}>Login</h2>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="username"
            control={methods.control}
            render={({ field }) => (
              <TextField
                {...field}
                label="E-mail"
                className={styles.campo}
                variant="outlined"
                fullWidth
                onChange={(e) => setUsername(e.target.value)}
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
                className={styles.campo}
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
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
          <Link href={"/client/auth/recoverPassword"}>
            <Button
              variant="text"
              color="inherit"
              style={{ textAlign: "left" }}
              className={styles.campo}
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
              className={styles.campo}
            >
              Voltar
            </Button>
          </Grid>
          <Grid item xs={6} pl={1}>
            <Button
              type="submit"
              variant="outlined"
              onClick={() => onSubmit()}
              fullWidth
              style={{ height: "100%" }}
              color={"inherit"}
              className={styles.campo}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
