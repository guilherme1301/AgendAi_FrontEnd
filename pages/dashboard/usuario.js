import React, { useEffect, useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import Agendamentos from "../../components/agendamentos";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function dashboarUsuario() {

    return (
        <div className={styles.container}>
            <div className={styles.title}>Nome do Usuário</div>
            <div className={styles.body}>
                <Agendamentos usuario={true}/>

                    <div className={styles.divContent}>
                        <svg  width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="248" height="248" rx="7" fill="#EFEFF0"/>
                            <path d="M6 6L244 244" stroke="#AFB1B6" stroke-width="2"/>
                            <path d="M244 6L5.99999 244" stroke="#AFB1B6" stroke-width="2"/>
                            <rect x="1" y="1" width="248" height="248" rx="7" stroke="#AFB1B6" stroke-width="2"/>
                        </svg>
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
                        />

                    <div className={styles.atualizaPerfil}>Atualizar Perfil</div>
                </div>
            </div>
        </div>
    );
}
