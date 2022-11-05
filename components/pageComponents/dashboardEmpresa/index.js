import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import stylest from '../../../styles/GerenciarServicos.module.css';
import styles from'../../../styles/SearchService.module.css'
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

export default function gerenciarServicoComponent() {
  return (
    <>
        <div className={styles.return}>
            <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black"/>
            </svg>
            <h3 onClick={() => router.back()}>Voltar</h3>
        </div>
        <Grid container spacing={2}>
          <Grid xs={7} spacing={2}>
              <div className={stylest.tituloEmpresa}>Empresa LTDA</div>
              <div className={stylest.titulosServicos}>Gerenciar Serviços</div>
              <Button variant="outlined">Adicione ou exclua seus serviços no botão ao lado</Button>
              <div className={stylest.titulosServicos}>Agendamentos Pendentes</div>
              <Stack spacing={1}>
                <Button variant="outlined">Corte de Cabelo - Júlio César - Quinta - Feira (25/08) - 15:00h</Button>
                <Button variant="outlined">Tingimento de Cabelo - Cleberson - Sexta - Feira (26/08) - 18:00h</Button>
                <Button variant="outlined">Corte de Cabelo - Gabriel - Segunda - Feira (29/08) - 09:00h</Button>
              </Stack>                 
              <div className={stylest.titulosServicos}>Agendamentos Confirmados</div>
              <Stack spacing={1}>
                <Button variant="outlined">Corte de Cabelo - Júlio César - Quinta - Feira (25/08) - 15:00h</Button>
                <Button variant="outlined">Tingimento de Cabelo - Cleberson - Sexta - Feira (26/08) - 18:00h</Button>
                <Button variant="outlined">Corte de Cabelo - Gabriel - Segunda - Feira (29/08) - 09:00h</Button>
              </Stack>
              
          </Grid>
          <Grid xs={5} spacing={2}>
            
            
            <Stack spacing={2}> 
            <svg viewBox="0 0 1000 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="398" height="248" rx="7" fill="#EFEFF0"/>
                  <path d="M6 6L394 244" stroke="#AFB1B6" stroke-width="2"/>
                  <path d="M394 6L5.99999 244" stroke="#AFB1B6" stroke-width="2"/>
                  <rect x="1" y="1" width="398" height="248" rx="7" stroke="#AFB1B6" stroke-width="2"/>
            </svg>
            <div>Alterar logo</div>            
                <TextField id="outlined-basic" label="Nome da Empresa" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Telefone" variant="outlined" />          
                <TextField id="outlined-basic" label="Descrição da Empresa" variant="outlined" /> 
                <Button variant="outlined">Atualizar Perfil</Button>                         
            </Stack>
            
          </Grid>        
        </Grid>       
    </>
  );
}
