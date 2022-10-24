import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../../styles/Home.module.css";
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import axios from 'axios'

export default function RegistrationFormGeneral({ ...props }) {
  
  const { onSubmit, onCancel, inputData} = props;
  const methods = useForm();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [phone, setPhone] = useState()
  const [isShop, setIsShop] = useState(false)

  const handleOnSubmit = async () => {
    if(isShop){
      const {data} = await axios.post("https://agendai-api.herokuapp.com/user-client", {
        name,
        email,
        password,
        phone
      })
      console.log(data)
    }else{
      const {data} = await axios.post("https://agendai-api.herokuapp.com/user-shop", {
        name,
        email,
        password,
        phone
      })
      console.log(data)
    }
  };

  const handleGoBack = () => {
    (onCancel && onCancel()) || router.back();
  };

  useEffect(()=>{
    if(inputData != null && inputData?.data != null){
      const { name, email, password, isShop } = inputData?.data;
      methods.setValue('name', name, {shouldValidate: true});
      methods.setValue('email', email, {shouldValidate: true});
      methods.setValue('password', password, {shouldValidate: true});
      methods.setValue('isShop', !!isShop ? "true" : "false");
    }
  },[inputData])

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid item xs={12}>
          <h2 className={styles.title}>Vamos Começar?</h2>
        </Grid>
        <p>Primeiro defina as informações de acesso da sua conta.</p>
        <Grid item xs={12}>
          <Controller
            name="name"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Nome"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
                error={!!methods.formState.errors.name}
                helperText={
                  !!methods.formState.errors.name
                    ? methods.formState.errors.name?.message
                    : ""
                }
              />
            )}
          />
          <Controller
            name="email"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="E-mail"
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
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
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Senha"
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
          <Controller
            name="phone"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Phone"
                type={"number"}
                onChange={(e) => setPhone(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!methods.formState.errors.phone}
                helperText={
                  !!methods.formState.errors.phone
                    ? methods.formState.errors.phone?.message
                    : ""
                }
              />
            )}
          />

          <Controller
            name="isShop"
            control={methods.control}
            defaultValue={false}
            render={({ field }) => (
              <>
                <Checkbox
                  // {...field}
                  onChange={(e) => setIsShop(e.target.checked)}
                  // checked={methods.getValues("isShop")}
                />
                Conta Empresaria?
              </>
            )}
          />
        </Grid>

        <Grid container direction="row" style={{ height: "50px" }} mt={2}>
          <Grid item xs={12} pl={1}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              onClick={() => handleOnSubmit()}
              style={{ height: "100%" }}
              color={"inherit"}
            >
              Avançar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
