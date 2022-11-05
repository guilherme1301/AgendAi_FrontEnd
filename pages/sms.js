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
            <ArrowBackIosIcon sx={{ fontSize: 20 }}></ArrowBackIosIcon><span onClick={() => router.back()}>Voltar</span> 
          </Grid>
          <Grid item xs={12} className={styles.gridSms}>
            <h2>Antes de continuarmos...</h2>
          </Grid>
          <Grid item xs={12} className={styles.gridSms}>
            <span>Enviamos um código de confirmação para o seu Whatsapp, favor inserir o código abaixo</span>
          </Grid>
          <Grid item xs={12} className={styles.gridSms}>
            <TextField id="number1" className={styles.textSms} variant="outlined" placeholder="-" inputProps={{ maxLength: 1 }} type="number"/>
            <TextField id="number2" className={styles.textSms} variant="outlined" placeholder="-" inputProps={{ maxLength: 1 }} type="number"/>
            <TextField id="number3" className={styles.textSms} variant="outlined" placeholder="-" inputProps={{ maxLength: 1 }} type="number"/>
            <TextField id="number4" className={styles.textSms} variant="outlined" placeholder="-" inputProps={{ maxLength: 1 }} type="number"/>
          </Grid>
          <Grid item xs={12} className={styles.gridSms}>
            <Button className={styles.buttonText} variant="outlined">Avançar</Button>
          </Grid>               
        </Grid>
    </>
  );
}
