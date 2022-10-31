import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../styles/Home.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import BackButton from "../../components/buttons/voltar";

const API_BODY = {
  password: ""
}

export default function RecoverPassword({ ...props }) {
  const [isLogged, setIsLogged] = useState(true);
  const { onSubmit, onCancel } = props;
  const methods = useForm();

  const handleOnSubmit = async (data) => {
    console.log(data);
    onSubmit && onSubmit(data);
  };

  const handleGoBack = () => {
    console.log("entrou");
    onCancel && onCancel() || router.back();
  };

  return (
    <>
      <BackButton onClick={() => { handleGoBack() }} />

      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <Grid item xs={12}>
          <h2 className={styles.title}>Resetar senha</h2>
        </Grid>
        <Grid item xs={12}>
          <h2 className={styles.message}>Lembre-se de criar uma senha forte, com letras, números e símbolos.</h2>
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Controller
            name="confirmPassword"
            control={methods.control}
            //defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirme a senha"
                className={styles.campo}
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
        <Grid container direction="row" style={{ height: "50px" }} mt={2}>
          <Grid item xs={12} pl={1}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              style={{ height: "100%" }}
              color={"inherit"}
              className={styles.campo}
            >
              Definir senha
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
