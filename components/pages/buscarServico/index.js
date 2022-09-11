import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import styles from'../../../styles/SearchService.module.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'start',
    border: "solid 1px black",
    borderRadius: "10px"
  }));

export default function searchServiceComponent() {
    const [data, setData] = useState([
        {
            serviceName: "Nome da loja",
            ServiceDescription: "Descrição do serviço",
            Time: "Seg à Sex - 10:20h à 22:00h",
            plaece: "Centro, Vila Velha - ES",
        },
        {
            serviceName: "Nome da loja",
            ServiceDescription: "Descrição do serviço",
            Time: "Seg à Sex - 10:20h à 22:00h",
            plaece: "Centro, Vila Velha - ES",
        },
        {
            serviceName: "Nome da loja",
            ServiceDescription: "Descrição do serviço",
            Time: "Seg à Sex - 10:20h à 22:00h",
            plaece: "Centro, Vila Velha - ES",
        },
        {
            serviceName: "Nome da loja",
            ServiceDescription: "Descrição do serviço",
            Time: "Seg à Sex - 10:20h à 22:00h",
            plaece: "Centro, Vila Velha - ES",
        },
    ])

  return (
    <>
        <div className={styles.return}>
            <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black"/>
            </svg>
            <h3>Voltar</h3>
        </div>
        <div className={styles.service}>Serviço XXXXX</div>
            <Box sx={{ flexGrow: 1, marginTop: "100px" }}>
            <Grid container spacing={7}>
            {data.map((item, index) => (
                <Grid item sm={4} key={index}>
                    <Item>
                    <div>
                        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="398" height="248" rx="7" fill="#EFEFF0"/>
                            <path d="M6 6L394 244" stroke="#AFB1B6" stroke-width="2"/>
                            <path d="M394 6L5.99999 244" stroke="#AFB1B6" stroke-width="2"/>
                            <rect x="1" y="1" width="398" height="248" rx="7" stroke="#AFB1B6" stroke-width="2"/>
                        </svg>
                        </div>
                        <h3 className={styles.serviceName}>{item.serviceName}</h3>
                        <p className={styles.serviceItem}>{item.ServiceDescription}</p>
                        <p className={styles.serviceItem}>{item.Time}</p>
                        <p className={styles.serviceItem}>{item.plaece}</p>
                    </Item>
                </Grid>
            ))}
            </Grid>
        </Box>
    </>
  );
}
