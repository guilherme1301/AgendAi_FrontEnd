import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../styles/Home.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import BackButton from "../../components/buttons/voltar";
import axios from 'axios'

export default function RecoverPassword({ ...props }) {
  const [isLogged, setIsLogged] = useState(true);
  const { onSubmit, onCancel } = props;
  const [phone, setPhone] = useState()
  const methods = useForm();

  const handleOnSubmit = async () => {
    if(phone.toString().length == 11){
      const {data} = await axios.post("https://agendai-api.herokuapp.com/recover-password", {
        phone,
      })
    }
  };

  const handleGoBack = () => {
    console.log("entrou");
    (onCancel && onCancel()) || router.back();
  };

  return (
    <>
      <BackButton
        onClick={() => {
          handleGoBack();
        }}
      />

      <form  onSubmit={(e) => e.preventDefault()}>
        <Grid item xs={12}>
          <h2 className={styles.title}>Esqueceu a senha?</h2>
        </Grid>
        <Grid item xs={12}>
          <h2 className={styles.message}>
            Vamos te enviar um código de celular com as intruções para recuperar a sua
            senha!
          </h2>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={methods.control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Celular"
                className={styles.campo}
                variant="outlined"
                fullWidth
                type='number'
                onInput={(e)=>{ 
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
                }}
                onChangeCapture={(e) => setPhone(e.target.value)}
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
        </Grid>
        <Grid container direction="row" style={{ height: "50px" }} mt={2}>
          <Grid item xs={12} pl={1}>
            <Button
              onClick={() => {handleOnSubmit()}}
              type="submit"
              variant="outlined"
              fullWidth
              style={{ height: "100%" }}
              color={"inherit"}
              className={styles.campo}
            >
              Resetar Senha
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
