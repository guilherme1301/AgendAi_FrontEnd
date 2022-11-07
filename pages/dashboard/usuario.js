import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import Agendamentos from "../../components/agendamentos";
import TextField from '@mui/material/TextField';
import AuthenticateService from "../../services/authenticate";
import axios from 'axios'
import { Context } from "../../pages/contexts/userContext";
import { useRouter } from "next/router";

export default function dashboarUsuario() {
    const [user, setUser] = useState({name: '', email: '', telefone: ''})
    const router = useRouter();

    const [listServicePending, setListServicePending] = useState(
        [
            {
                service: "Corte de Cabelo",
                name: "Julio Cesar",
                day: "Quinta feira (25/08)",
                hour: "15:00h",
            },
            {
                service: "Corte de Cabelo",
                name: "Julio Cesar",
                day: "Quinta feira (25/08)",
                hour: "15:00h",
            },
            {
                service: "Corte de Cabelo",
                name: "Julio Cesar",
                day: "Quinta feira (25/08)",
                hour: "15:00h",
            }
        ]
    );
    const [listServiceConfirmed, setListServiceConfirmed] = useState(
        [
            {
                service: "Corte de Cabelo",
                name: "Julio Cesar",
                day: "Quinta feira (25/08)",
                hour: "15:00h",
            },
            {
                service: "Corte de Cabelo",
                name: "Julio Cesar",
                day: "Quinta feira (25/08)",
                hour: "15:00h",
            },
            {
                service: "Corte de Cabelo",
                name: "Julio Cesar",
                day: "Quinta feira (25/08)",
                hour: "15:00h",
            }
        ]
    );

    const { isLogged, userData, type } = useContext(Context);

    const updateProfile = async () => {
        const {data} = await axios.put("https://agendai-api.herokuapp.com/user-client?id="+JSON.parse(userData).id, user)
    }

    // useEffect(() => {
    //     if (router.isReady) {
    //       if(type !== "user"){
    //         router.push('/')
    //       }
    //     }
    //   }, [type])

    return (
        <div className={styles.container}>
            <div className={styles.title}>Area do Cliente</div>
            <div className={styles.body}>
                <Agendamentos usuario={true} listServicePending={listServicePending} listServiceConfirmed={listServiceConfirmed}/>

                    <div className={styles.divContent}>
                        <svg  width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="248" height="248" rx="7" fill="#EFEFF0"/>
                            <path d="M6 6L244 244" stroke="#AFB1B6" stroke-width="2"/>
                            <path d="M244 6L5.99999 244" stroke="#AFB1B6" stroke-width="2"/>
                            <rect x="1" y="1" width="248" height="248" rx="7" stroke="#AFB1B6" stroke-width="2"/>
                        </svg>
                        {/* <p className={styles.alterarFoto}>Alterar Foto</p> */}

                        <TextField                                                    
                            margin="dense"
                            id="name" 
                            type="text"
                            fullWidth
                            label="Nome Completo" 
                            variant="outlined" 
                            placeholder="Cássio"
                            onChange={(e) => setUser((prevState) => ({...prevState, name: e.target.value}))}
                        />

                        <TextField                             
                            margin="dense"
                            id="email" 
                            type="email"
                            fullWidth
                            label="E-mail" 
                            variant="outlined" 
                            placeholder="cassio@uvv.br"                            
                            onChange={(e) => setUser((prevState) => ({...prevState, email: e.target.value}))}
                        />

                        <TextField                             
                            margin="dense"
                            id="phone" 
                            type="email"
                            fullWidth
                            label="Telefone" 
                            variant="outlined" 
                            placeholder="(27) 99999-9999"
                            onChange={(e) => setUser((prevState) => ({...prevState, telefone: e.target.value}))}
                        />

                    <div onClick={() => updateProfile(user)} className={styles.atualizaPerfil}>Atualizar Perfil</div>
                </div>
            </div>
        </div>
    );
}
