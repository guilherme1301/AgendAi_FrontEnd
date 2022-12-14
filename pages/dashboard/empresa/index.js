import React, { useEffect, useState } from "react";
import styles from "../../../styles/Dashboard.module.css";
import Agendamentos from "../../../components/agendamentos";
import { useRouter } from 'next/router'
import axios from "../../axios";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useContext } from "react";
import { Context } from "../../contexts/userContext";
import { Grid } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function dashboardEmpresa() {
    const router = useRouter()
    const [dadosAgendados, setDadosAgendados] = useState()
    const [dadosConfirmados, setdadosConfirmados] = useState()
    const { isLogged, userData } = useContext(Context);

    useEffect(() => {
        getDadosAgendados()
        getDadosConfirmados()
    }, [userData])
    
    async function getDadosAgendados() {
        await axios.get(`/schedule?status=awaiting`).
            then(({ data }) => {
                setDadosAgendados(data.payload)
            })
    }

    async function getDadosConfirmados() {
        await axios.get(`/schedule?status=confirmed`).
            then(({ data }) => {
                setdadosConfirmados(data.payload)
            })
    }

    return (
        
        <div className={styles.container}>
            <Grid item xs={2} className={styles.arrowCarrouselDashboard}>
                <ArrowBackIosIcon sx={{ fontSize: 20 }}></ArrowBackIosIcon><span onClick={() => router.back()}>Voltar</span> 
            </Grid>            
            <div className={styles.title}>{userData.name}</div>            
            <div className={styles.body}>
                <div className={styles.divContent}>
                    <div>
                        <div className={styles.subTitle}>Gerenciar Serviços</div>
                        <div className={styles.divButton}>
                            Adicione, edite ou exclua seus serviços no botão ao lado
                            <ModeEditIcon onClick={ () => router.push('/gerenciarServicos')} />
                        </div>
                    </div>
                    <div>
                        <div className={styles.subTitle}>Editar Perfil</div>
                        <div className={styles.divButton}>
                            Edite as informações e fotos da sua empresa no botão ao lado
                            <ModeEditIcon onClick={() => router.push('/dashboard/empresa/123')}/>
                        </div>
                    </div>
                </div>
                <Agendamentos usuario={false} listServicePending={dadosAgendados} listServiceConfirmed={dadosConfirmados} />
            </div>
        </div>
    );
}