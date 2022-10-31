import React, { useContext, useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import styles from "../styles/Dashboard.module.css";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function Sms() {
  return (
    <>
        <Grid container spacing={5} mt={5} mb={9} className={styles.containerSms}>
          <Grid item xs={2} className={styles.arrowCarrouselSms}>
            <ArrowBackIosIcon sx={{ fontSize: 20 }}></ArrowBackIosIcon> Voltar
          </Grid>
          <Grid item xs={12} className={styles.gridSms}>
            <h2>Antes de continuarmos...</h2>
          </Grid>
          <Grid item xs={12} className={styles.gridSms}>
            <span>Enviamos um código de confirmação para o seu Whatsapp, favor inserir o código abaixo</span>
          </Grid>
          <Grid item xs={12} className={styles.gridSms}>
            <TextField className={styles.textSms} variant="outlined" placeholder="-"/>
            <TextField className={styles.textSms} variant="outlined" placeholder="-"/>
            <TextField className={styles.textSms} variant="outlined" placeholder="-"/>
            <TextField className={styles.textSms} variant="outlined" placeholder="-"/>
          </Grid>
          <Grid item xs={12} className={styles.gridSms}>
            <Button className={styles.buttonText} variant="outlined">Avançar</Button>
          </Grid>               
        </Grid>
    </>
  );
}
