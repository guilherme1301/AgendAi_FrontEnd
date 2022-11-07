import React, { useContext, useEffect, useState } from "react";
import { Context } from "./contexts/userContext";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import styles from "../styles/Dashboard.module.css";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from "./axios";
import { useRouter } from "next/router";

export default function Home() {
  const { userData } = useContext(Context);
  const [findService, setFindService] = useState()
  const router = useRouter();

  const services = async () => {
    try {
      const { data } = await axios.get(`/service?serviceName=`, findService)

      if (data.status == 200) {
        router.push({
          pathname: 'buscarServico',
          query: { param: findService },
        })
      }
    } catch (e) {
      console.log(e);
    }


  }

  return (
    <>
      <Grid className={styles.BannerPhoto} >
        <Grid className={styles.BannerText}>Encontre os melhores <br></br>serviços para você! <p></p>
          <TextField className={styles.BannerInput} onChange={(e) => setFindService(e.target.value)} placeholder="Nome do serviço ou Cidade" variant="outlined" />
          <Button className={styles.BannerButton} onClick={() => services()} variant="contained">Buscar</Button>
        </Grid>
      </Grid>
      <Grid className={styles.dashboardService} mt={7}>
        <Grid className={styles.dashboardTitleService}>Serviços profissionais populares</Grid>
      </Grid>
      <Grid container spacing={0} mt={5} mb={9} className={styles.dashboardCarrousel}>
        <Grid item xs={2} className={styles.arrowCarrousel}>
          <ArrowBackIosIcon sx={{ fontSize: 100 }}></ArrowBackIosIcon>
        </Grid>
        <Grid item xs={2} >
          <img height='360px' src='https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'></img>
        </Grid>
        <Grid item xs={2}>
          <img height='360px' src="https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"></img>
        </Grid>
        <Grid item xs={2}>
          <img height='360px' src="https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
        </Grid>
        <Grid item xs={2}>
          <img height='360px' src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
        </Grid>
        <Grid item xs={2} className={styles.arrowCarrousel}>
          <ArrowForwardIosIcon sx={{ fontSize: 100 }}></ArrowForwardIosIcon>
        </Grid>
      </Grid>
    </>
  );
}
