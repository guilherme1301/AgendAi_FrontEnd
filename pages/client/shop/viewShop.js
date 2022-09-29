import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import stylest from '../../../styles/GerenciarServicos.module.css';
import styles from '../../../styles/SearchService.module.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'start',
  border: "solid 1px black",
  borderRadius: "10px"
}));

export default function servicos() {
  return (
    <>
      <div className={styles.return}>
        <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black" />
        </svg>
        <h3>Voltar</h3>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} className={stylest.tituloEmpresa}>Barbearia do Calvo e Careca</Grid>
        <Grid item xs={12} md={12} lg={7} className={stylest.gridInfo}>
          <Grid container spacing={2} >
            <Grid item xs={12} className={stylest.titulosServicos}>Sobre</Grid>
            <Grid item xs={9} className={stylest.boxEscrito}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis magna magna, a efficitur velit rhoncus ut. Etiam et varius libero. Sed laoreet non erat sed ornare. Donec fringilla lectus sit amet diam facilisis, ut tincidunt risus gravida. Nulla id mauris commodo nisi convallis tempor id at neque. Fusce quis mi condimentum enim commodo posuere nec fermentum dui.</Grid>
            <Grid item xs={12} className={stylest.titulosServicos}>Endereço</Grid>
            <Grid item xs={12}>Rua Luiza Grinalda, 37 - Centro, Vila Velha - ES</Grid>
            <Grid item xs={12} className={stylest.titulosServicos}>Horario de Funcionamento</Grid>
            <Grid item xs={6} className={stylest.diasSemana}>Segunda-Feira</Grid><Grid item xs={6}>09:00 - 21:30</Grid>
            <Grid item xs={6} className={stylest.diasSemana}>Terça-Feira</Grid><Grid item xs={6}>09:00 - 21:30</Grid>
            <Grid item xs={6} className={stylest.diasSemana}>Quarta-Feira</Grid><Grid item xs={6}>09:00 - 21:30</Grid>
            <Grid item xs={6} className={stylest.diasSemana}>Quinta-Feira</Grid><Grid item xs={6}>09:00 - 21:30</Grid>
            <Grid item xs={6} className={stylest.diasSemana}>Sexta-Feira</Grid><Grid item xs={6}>09:00 - 21:30</Grid>
            <Grid item xs={6} className={stylest.diasSemana}>Sábado</Grid><Grid item xs={6}>09:00 - 21:30</Grid>
            <Grid item xs={6} className={stylest.diasSemana}>Domingo</Grid><Grid item xs={6}>Fechado</Grid>
          </Grid>
        </Grid>
        <Grid xs={12} lg={5} container spacing={2}>
          <Grid item xs={5} lg={12}>
            <Grid item style={{
              width: '100%',
              height: '100%',
              background: '#cdcdcd'
            }}>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid item style={{
              width: '100%',
              height: '100%',
              background: '#cdcdcd'
            }}>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid item style={{
              width: '100%',
              height: '100%',
              background: '#cdcdcd'
            }}>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid item style={{
              width: '100%',
              height: '100%',
              background: '#cdcdcd'
            }}>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" className={stylest.botaoAgendar}>Agendar</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
