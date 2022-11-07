import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../../styles/Home.module.css";
import { Button, Checkbox, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import axios from "../../../pages/axios";
import { Input, notification } from 'antd';
import "antd/dist/antd.css";


export default function RegistrationFormGeneral({ ...props }) {
  
  const { onSubmit, onCancel, inputData, setStepShop, setShopJson} = props;
  const methods = useForm();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [phone, setPhone] = useState()
  const [isShop, setIsShop] = useState(false)

  const handleOnSubmit = async () => {
    if(isShop){
      setShopJson({name, email, password, phone})
      setStepShop(1)
    }else{
    
        const {data} = await axios.post("/user-client", {
          name,
          email,
          password,
          phone
        }).then((res) => {
          notification.success({
              message: 'Cliente registrado',
              placement: 'bottomRight'
          });
          return res.data;
      }).catch((err) => {
          notification.error({
              message: err.response.data.message,
              placement: 'bottomRight'
          });
          throw err.response.data.message;
      })
      
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
        <p className={styles.campo}>Primeiro defina as informações de acesso da sua conta.</p>
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
                type='number'
                onInput={(e)=>{ 
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
                }}
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
                Conta Empresarial?
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
