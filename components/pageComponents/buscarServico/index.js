import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from '../../../styles/SearchService.module.css'
import Image from "next/image";
import axios from "../../../pages/axios";

import { useRouter } from 'next/router'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'start',
    border: "1px solid #128C7E;",
    borderRadius: "10px",
}));

export default function searchServiceComponent() {
    const [data, setData] = useState()
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            if (router.query.param !== undefined) {
                axios.get("service?serviceName=" + router.query.param).then(({ data }) => setData(data.payload))
            } else {
                axios.get("service").then(({ data }) => setData(data.payload))
            }
        }
    }, [router])

    return (
        <div>
            <div className={styles.return}>
                <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black" />
                </svg>
                <h3 onClick={() => router.back()}>Voltar</h3>
            </div>
            <div className={styles.service}>Serviços</div>

            <Grid spacing={7} sx={{ marginTop: "100px", justifyContent: 'center', }} container>
                {data && data.map((item, index) => (
                    <Grid item key={index}>
                        <Item onClick={() => router.push(`/servicos/${item.id}`)}>
                            {item?.shop.logo !== "fake" && 
                                <Image width={'300px'} height={'300px'} src={item?.shop.logo} />
                            }
                            <h3 className={styles.serviceName}>{item?.serviceDefault.name}</h3>
                            <p className={styles.serviceItem}>{item?.description}</p>
                            <p className={styles.serviceItem}>{item?.shop.finTime}</p>
                            <p className={styles.serviceItem}>{item?.shop.address.city}, {item?.shop.address.district}, {item?.shop.address.region}</p>

                        </Item>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
