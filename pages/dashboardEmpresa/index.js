import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import stylest from '../../styles/GerenciarServicos.module.css';
import styles from'../../styles/SearchService.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'start',
  border: "solid 1px black",
  borderRadius: "10px"
}));

const SERVICE_DATA = {
  nameShop: 'Empresa LTDA',
  pendingScheduling: [{
    Service: 'Corte de Cabelo',
    User: 'Júlio César',
    Day: 'Quinta-Feira',
    Date: '25/08',
    Hours: '15:00'
  },
  {
    Service: 'Tingimento de Cabelo',
    User: 'Cleberson',
    Day: 'Sexta-Feira',
    Date: '26/08',
    Hours: '18:00'
  },
  {
    Service: 'Corte de Cabelo',
    User: 'Gabriel',
    Day: 'Segunda-Feira',
    Date: '29/08',
    Hours: '09:00'
  }
],
confirmedScheduling: [{
  Service: 'Corte de Cabelo',
  User: 'Júlio César',
  Day: 'Quinta-Feira',
  Date: '25/08',
  Hours: '15:00'
},
{
  Service: 'Tingimento de Cabelo',
  User: 'Cleberson',
  Day: 'Sexta-Feira',
  Date: '26/08',
  Hours: '18:00'
},
{
  Service: 'Corte de Cabelo',
  User: 'Gabriel',
  Day: 'Segunda-Feira',
  Date: '29/08',
  Hours: '09:00'
}
]
}

export default function gerenciarServicoComponent() {
  const [serviceData, setServiceData] = useState(SERVICE_DATA);

  return (
    <>
        <div className={styles.return}>
            <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black"/>
            </svg>
            <h3>Voltar</h3>
        </div>
        <Grid container spacing={2}>
          <Grid xs={12} className={stylest.tituloEmpresa} mt={5}>{serviceData.nameShop}</Grid>
          <Grid xs={7} spacing={2}>              
              <Grid item xs={12} className={stylest.titulosServicos}>Gerenciar Serviços</Grid>
              <Grid item xs={9} className={stylest.fieldEdit}> Adicione, edite ou exclua seus serviços no botão ao lado</Grid>
              <Grid item xs={12} className={stylest.titulosServicos}>Editar Perfil</Grid>
              <Grid item xs={9} className={stylest.fieldEdit}> Edite as informações e fotos da sua empresa no botão ao lado</Grid>   
          </Grid>
          <Grid xs={5} spacing={2}>            
            <Grid item xs={12} className={stylest.titulosServicos}>Agendamentos Pendentes</Grid>
            {
              SERVICE_DATA.pendingScheduling.map((infoServiceP, index) => (
                <>
                  <Grid item xs={11} className={stylest.fieldAgendamento}> {infoServiceP.Service} - {infoServiceP.User} - {infoServiceP.Day} ({infoServiceP.Date}) - {infoServiceP.Hours}h</Grid>
                </>
              ))
            }
            <Grid item xs={12} className={stylest.titulosServicos}>Agendamentos Confirmados</Grid>
            {
              SERVICE_DATA.confirmedScheduling.map((infoServiceC, index) => (
                <>
                  <Grid item xs={11} className={stylest.fieldAgendamento}> {infoServiceC.Service} - {infoServiceC.User} - {infoServiceC.Day} ({infoServiceC.Date}) - {infoServiceC.Hours}h</Grid>
                </>
              ))
            }
          </Grid>        
        </Grid>       
    </>
  );
}
