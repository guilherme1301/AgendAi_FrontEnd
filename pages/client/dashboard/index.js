import React, { useEffect, useState } from "react";
import styles from "../../../styles/Dashboard.module.css";
import Agendamentos from "../../../components/agendamentos";
import TextField from '@mui/material/TextField';
import AuthenticateService from "../../../services/authenticate";


export default function dashboarUsuario() {
    const [user, setUser] = useState({name: '', email: '', telefone: ''})
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

    const updateProfile = () => {
        //send data user
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Area do Cliente</div>
            <div className={styles.body}>
                <Agendamentos usuario={true} listServicePending={listServicePending} listServiceConfirmed={listServiceConfirmed}/>

                    <div className={styles.divContent}>
                    <img src="https://i.pinimg.com/564x/8e/6d/ee/8e6deed92dc84de3e9212fd56a0d0a97--johnny-bravo-cartoon-network.jpg" className={styles.img}></img>

                       
                        <p className={styles.alterarFoto}>Alterar Foto</p>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nome Completo"
                            type="email"
                            fullWidth
                            variant="standard"
                            placeholder="Cássio"
                            onChange={() => setUser(user.name)}
                            className={styles.inputborder}
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="E-mail"
                            type="email"
                            fullWidth
                            variant="standard"
                            placeholder="cassio@uvv.br"
                            onChange={() => setUser(user.email)}
                            className={styles.inputborder}
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="phone"
                            label="Telefone"
                            type="email"
                            fullWidth
                            variant="standard"
                            placeholder="(27) 99999-9999"
                            onChange={() => setUser(user.telefone)}
                            className={styles.inputborder}
                        />

                    <div onClick={() => updateProfile(user)} className={styles.atualizaPerfil}>Editar Perfil</div>
                </div>
            </div>
        </div>
    );
}
