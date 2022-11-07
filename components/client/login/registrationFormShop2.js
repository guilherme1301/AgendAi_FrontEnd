import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../../styles/Home.module.css";
import { Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import HorarioFuncionamento from "../../buttons/horarioFuncionamento";
import axios from 'axios'

export default function RegistrationFormShop2({ ...props }) {
  // const [inputUserData, setInputUserData] = useState(true);
  const { onSubmit, onCancel } = props;
  const methods = useForm();
  const [name, setName] = useState();
  const { type, nextPage, previousPage, children, setStepShop, setShopJson, shopJson, setFinish } = props;

  const [dia, setDia] = useState({
      "segunda": {segunda: false, ini: '', fim: ''},
      "terça": {terça: false, ini: '', fim: ''},
      "quarta": {quarta: false, ini: '', fim: ''},
      "quinta": {quinta: false, ini: '', fim: ''},
      "sexta": {sexta: false, ini: '', fim: ''},
    }
  )

  const finish = async () => {
    setShopJson((prev) => ({...prev, "times": {...dia}}))
    setFinish(true)
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        
      <h2 className={styles.title}>Quase la...</h2>
        <Grid item xs={12} mt={3}>
          <label style={{ float: "left" }}>Horário de funcionamento:</label>
          <HorarioFuncionamento setDia={setDia} dia={dia} day="segunda" />
          <HorarioFuncionamento setDia={setDia} dia={dia} day="terça" />
          <HorarioFuncionamento setDia={setDia} dia={dia} day="quarta" />
          <HorarioFuncionamento setDia={setDia} dia={dia} day="quinta" />
          <HorarioFuncionamento setDia={setDia} dia={dia} day="sexta" />
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
            name="zipcode"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Zipcode"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!methods.formState.errors.zipcode}
                helperText={
                  !!methods.formState.errors.zipcode
                    ? methods.formState.errors.zipcode?.message
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
              onClick={() => finish()}
            >
              Finalizar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
