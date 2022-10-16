import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../../styles/Home.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import BackButton from "../../../components/buttons/voltar"
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

export default function RecoverPassConfirm({ ...props }) {
    const [isLogged, setIsLogged] = useState(true);
    const { onSubmit, onCancel } = props;
    const methods = useForm();

    const handleOnSubmit = async (data) => {
        console.log(data);
        onSubmit && onSubmit(data);
    };

    const handleGoBack = () => {
        console.log("entrou");
        onCancel && onCancel() || router.back();
    };


    return (
        <>
            <BackButton onClick={() => { handleGoBack() }} />

            <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
                <Grid container justifyContent={"center"}>
                    <Grid item >
                        <DoneRoundedIcon fontSize="large" style={{fontSize:100}} />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <h2 className={styles.message}>Senha alterada com sucesso!</h2>
                </Grid>

                <Grid container direction="row" style={{ height: "50px" }} mt={2}>
                    <Grid item xs={12} pr={2}>
                        <Button
                            onClick={handleGoBack}
                            variant="outlined"
                            fullWidth
                            style={{ height: "100%" }}
                            color={"inherit"}
                        >
                            Fechar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}