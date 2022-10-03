import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../../styles/Home.module.css";
import { Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import HorarioFuncionamento from "../../buttons/horarioFuncionamento";

export default function RegistrationFormShop2({ ...props }) {
  const [inputUserData, setInputUserData] = useState(true);
  const { onSubmit, onCancel } = props;
  const methods = useForm();
  const [name, setName] = useState();
  const { type, nextPage, previousPage, children } = props;

  const handleChange = () => {
    //setAge(event.target.value);
  };

  const handleOnSubmit = async (data) => {
    onSubmit && onSubmit(data);
  };

  const handleGoBack = () => {
    (onCancel && onCancel()) || router.back();
  };

  return (
    <>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        
      <h2 className={styles.title}>Quase la...</h2>
        <p>
          Registre o(s) tipo(s) de serviço(s) e os horários de funcionamento:{" "}
        </p>
        <Grid item xs={12} mt={1}>
          <label style={{ float: "left" }}>Serviços oferecidos:</label>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Escolha uma opção:
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Button fullWidth color="inherit" variant="outlined">
            +
          </Button>
        </Grid>

        <Grid item xs={12} mt={3}>
          <label style={{ float: "left" }}>Horário de funcionamento:</label>
          <HorarioFuncionamento day="segunda" />
          <HorarioFuncionamento day="terça" />
          <HorarioFuncionamento day="quarta" />
          <HorarioFuncionamento day="quinta" />
          <HorarioFuncionamento day="sexta" />
        </Grid>
{/* 
        <Grid item xs={12}>
          <Controller
            name="phone"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Telefone"
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
            name="cnpj"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Cnpj"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!methods.formState.errors.cnpj}
                helperText={
                  !!methods.formState.errors.cnpj
                    ? methods.formState.errors.cnpj?.message
                    : ""
                }
              />
            )}
          />
          <Controller
            name="cep"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Cep"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!methods.formState.errors.cep}
                helperText={
                  !!methods.formState.errors.cep
                    ? methods.formState.errors.cep?.message
                    : ""
                }
              />
            )}
          />

          <Controller
            name="street"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Rua"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!methods.formState.errors.street}
                helperText={
                  !!methods.formState.errors.street
                    ? methods.formState.errors.street?.message
                    : ""
                }
              />
            )}
          />

          <Controller
            name="city"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Cidade"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!methods.formState.errors.city}
                helperText={
                  !!methods.formState.errors.city
                    ? methods.formState.errors.city?.message
                    : ""
                }
              />
            )}
          />

          <Controller
            name="state"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Estado"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!methods.formState.errors.state}
                helperText={
                  !!methods.formState.errors.state
                    ? methods.formState.errors.state?.message
                    : ""
                }
              />
            )}
          />

        </Grid> */}

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
