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

export default function agendamentos() {
  return (
    <>
        <div className={styles.return}>
            <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black"/>
            </svg>
            <h3 onClick={() => router.back()}>Voltar</h3>
        </div>
        <Grid container spacing={2}>
          <Grid item spacing={2} className={stylest.gridInfo}>        
              <Grid container spacing={2}>
                <Grid item xs={12} className={stylest.tituloEmpresa}>Barbearia do Calvo e Careca</Grid>
                
                <Grid container xs={12} sx={{pt: 5}} justifyContent="center"  mr={10} ml={10}>                  
                  <Grid item xs={4} className={stylest.boxDataTable}>Escolha Um Serviço: </Grid><Grid item xs={4} className={stylest.boxDataTable}>Serviço 1</Grid><Grid item xs={4} className={stylest.boxDataTable}>18/09</Grid>
                  <Grid item xs={4} className={stylest.boxDataTable}>Serviço 1 </Grid><Grid item xs={4} className={stylest.boxDataTable}>18/09</Grid><Grid item xs={4} className={stylest.boxDataTable}>10:00</Grid>
                  <Grid item xs={4} className={stylest.boxDataTable}>Serviço 2 </Grid><Grid item xs={4} className={stylest.boxDataTable}>19/09</Grid><Grid item xs={4} className={stylest.boxDataTable}>10:00</Grid>
                  <Grid item xs={4} className={stylest.boxDataTable}>Serviço 3 </Grid><Grid item xs={4} className={stylest.boxDataTable}>20/09</Grid><Grid item xs={4} className={stylest.boxDataTable}>10:00</Grid>
                  <Grid item xs={4} className={stylest.boxDataTable}>Serviço 4 </Grid><Grid item xs={4} className={stylest.boxDataTable}>21/09</Grid><Grid item xs={4} className={stylest.boxDataTable}>10:00</Grid>
                  <Grid item xs={4} className={stylest.boxDataTable}>Serviço 5 </Grid><Grid item xs={4} className={stylest.boxDataTable}>22/09</Grid><Grid item xs={4} className={stylest.boxDataTable}>10:00</Grid>
                  <Grid item xs={4} className={stylest.boxDataTable}>Serviço 6 </Grid><Grid item xs={4} className={stylest.boxDataTable}>23/09</Grid><Grid item xs={4} className={stylest.boxDataTable}>10:00</Grid>
                  <Grid item xs={4} > </Grid><Grid item xs={4} className={stylest.boxDataTable}>24/09</Grid><Grid item xs={4} className={stylest.boxDataTable}>10:00</Grid>
                </Grid>
                <Grid container xs={12} justifyContent="flex-end" mr={10}>
                  <Button variant="outlined" className={stylest.botaoAgendar}>Finalizar Agendamento</Button>  
                </Grid> 
              </Grid>
                
          </Grid>              
        </Grid>       
    </>
  );
}
