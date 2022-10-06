import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../../styles/Home.module.css";
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";

export default function RegistrationFormGeneral({ ...props }) {
  
  const { onSubmit, onCancel } = props;
  const methods = useForm();

  const handleOnSubmit = async (data) => {
    onSubmit && onSubmit(data);
  };

  const handleGoBack = () => {
    (onCancel && onCancel()) || router.back();
  };

  return (
    <>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
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
                {...field}
                label="Nome"
                variant="outlined"
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
                {...field}
                label="E-mail"
                type={"email"}
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

          <Controller
            name="isShop"
            control={methods.control}
            defaultValue={true}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <Checkbox
                  {...field}
                  checked={methods.getValues("isShop")}
                  // onChange={handleChange1}
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
