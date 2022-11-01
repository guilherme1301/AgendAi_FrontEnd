import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../../styles/Home.module.css";
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";

export default function RegistrationFormShop1({ ...props }) {
  const [inputUserData, setInputUserData] = useState(true);
  const { onSubmit, onCancel, setStepShop, setShopJson } = props;

  const [cnpj, setCNPJ] = useState('');
  const [zipcode, setCEP] = useState('');
  const [street, setRua] = useState('');
  const [city, setCidade] = useState('');
  const [state, setEstado] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [complement, setComplement] = useState('');

  const methods = useForm();

  const finish = () => {
    setShopJson((prev) => ({...prev, "address": {zipcode: +zipcode, street, city, state, number: +number, district, complement}, cnpj, logo:'as'}))
    setStepShop(2)
  }

  const handleOnSubmit = async (data) => {
    onSubmit && onSubmit(data);
  };

  const handleGoBack = () => {
    (onCancel && onCancel()) || router.back();
  };

  return (
    <>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        
      <h2 className={styles.title} style={{ textAlign: "left" }}>
          Perfeito!
        </h2>
        <p>Agora nos diga mais sobre a sua empresa.</p>
        
        <Grid item xs={12}>
          <Controller
            name="cnpj"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="cnpj"
                variant="outlined"
                fullWidth
                onChange={(e) => setCNPJ(e.target.value)}
                margin="normal"
              />
            )}
          />

          <Controller
            name="complement"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="complement"
                variant="outlined"
                fullWidth
                onChange={(e) => setComplement(e.target.value)}
                margin="normal"
              />
            )}
          />

        <Controller
            name="district"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="district"
                variant="outlined"
                fullWidth
                onChange={(e) => setDistrict(e.target.value)}
                margin="normal"
              />
            )}
          />
          <Controller
            name="number"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Number"
                variant="outlined"
                fullWidth
                onChange={(e) => setNumber(e.target.value)}
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
            name="zipcode"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Cep"
                variant="outlined"
                fullWidth
                onChange={(e) => setCEP(e.target.value)}
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
                label="Rua"
                variant="outlined"
                fullWidth
                onChange={(e) => setRua(e.target.value)}
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
            name="district"
            control={methods.control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Cidade"
                variant="outlined"
                fullWidth
                onChange={(e) => setCidade(e.target.value)}
                margin="normal"
                error={!!methods.formState.errors.district}
                helperText={
                  !!methods.formState.errors.district
                    ? methods.formState.errors.district?.message
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
                label="Estado"
                variant="outlined"
                fullWidth
                onChange={(e) => setEstado(e.target.value)}
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

        </Grid>

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
              Avançar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
