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
import axios from "../../axios";
import { useRouter } from 'next/router'

export default function servicos() {

  const router = useRouter()
  const [data, setData] = useState()
  const {query, isReady} = useRouter()
  const { id } = query

  useEffect(() => {
    if(isReady){
      axios.get(`service/one?id=${id}`).then(({data}) => setData(data.payload))
    }
  },[id])

  console.log(data)
  return (
    <>
      <div className={styles.return}>
        <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black" />
        </svg>
        <h3 onClick={() => router.back()}>Voltar</h3>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} className={stylest.tituloEmpresa}>{data?.shop.name}</Grid>
        <Grid xs={12} md={12} lg={7} className={stylest.gridInfo}>
          <Grid container spacing={2} >
            <Grid item xs={12} className={stylest.titulosServicos}>Sobre</Grid>
            <Grid item xs={9} className={stylest.boxEscrito}>{data?.description}</Grid>
            <Grid item xs={12} className={stylest.titulosServicos}>Endere??o</Grid>
            <Grid item xs={12}>{data?.shop.address.street}, {data?.shop.address.number} - {data?.shop.address.district} - {data?.shop.address.city}, {data?.shop.address.state}</Grid>
            <Grid item xs={12} className={stylest.titulosServicos}>Horario de Funcionamento</Grid>

            <>
              <Grid item xs={6} className={stylest.diasSemana}>Segunda</Grid>
              <Grid item xs={6} className={stylest.diasSemana}>{data?.shop?.times?.segunda?.open ? data?.shop?.times?.segunda?.ini + '-' + data?.shop?.times?.segunda?.fim : 'Fechado'}</Grid>
            </>
            <>
              <Grid item xs={6} className={stylest.diasSemana}>Ter??a</Grid>
              <Grid item xs={6} className={stylest.diasSemana}>{data?.shop?.times?.terca?.open ? data?.shop?.times?.terca?.ini + '-' + data?.shop?.times?.terca?.fim : 'Fechado'}</Grid>
            </>
            <>
              <Grid item xs={6} className={stylest.diasSemana}>Quarta</Grid>
              <Grid item xs={6} className={stylest.diasSemana}>{data?.shop?.times?.quarta?.open ? data?.shop?.times?.quarta?.ini + '-' + data?.shop?.times?.quarta?.fim : 'Fechado'}</Grid>
            </>
            <>
              <Grid item xs={6} className={stylest.diasSemana}>Quinta</Grid>
              <Grid item xs={6} className={stylest.diasSemana}>{data?.shop?.times?.quinta?.open ? data?.shop?.times?.quinta?.ini + '-' + data?.shop?.times?.quinta?.fim : 'Fechado'}</Grid>
            </>
            <>
              <Grid item xs={6} className={stylest.diasSemana}>Sexta</Grid>
              <Grid item xs={6} className={stylest.diasSemana}>{data?.shop?.times?.sexta?.open ? data?.shop?.times?.sexta?.ini + '-' + data?.shop?.times?.sexta?.fim : 'Fechado'}</Grid>
            </>
            <>
              <Grid item xs={6} className={stylest.diasSemana}>Sabado</Grid>
              <Grid item xs={6} className={stylest.diasSemana}>{data?.shop?.times?.sabado?.open ? data?.shop?.times?.sabado?.ini + '-' + data?.shop?.times?.sabado?.fim : 'Fechado'}</Grid>
            </>
            <>
              <Grid item xs={6} className={stylest.diasSemana}>Domingo</Grid>
              <Grid item xs={6} className={stylest.diasSemana}>{data?.shop?.times?.domingo?.open ? data?.shop?.times?.domingo?.ini + '-' + data?.shop?.times?.domingo?.fim : 'Fechado'}</Grid>
            </>

          </Grid>
        </Grid>
        <Grid xs={12} lg={5} container spacing={2} mt={3}>          
          {
            data?.shop.photos.map((urlImage, index) => (
              <>
                <Grid item xs={12} lg={index == 0 ? 12 : 4}>
                  <Grid item style={{
                    width: '100%',
                    height: '200px',
                    backgroundImage: `url(${urlImage})`                    
                  }}>
                  </Grid>
                </Grid>
              </>
            ))
          }
          <Grid item xs={12}>
            <Button variant="outlined" className={stylest.botaoAgendar} onClick={() => router.push(`/agendamentos/${data.shop.id}`)}>Agendar</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
