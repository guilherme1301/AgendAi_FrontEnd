import React, { useEffect, useState } from "react";
import router from "next/router";
import styles from "../../../styles/Home.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import BackButton from "../../../components/buttons/voltar"

export default function RecoverPassword({ ...props }) {
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
                <Grid item xs={12}>
                    <h2 className={styles.title}>Recuperar Senha</h2>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="email"
                        control={methods.control}
                        defaultValue="a"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="E-mail"
                                // type={"email"}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!methods.formState.errors.email}
                                helperText={
                                    !!methods.formState.errors.email
                                        ? methods.formState.errors.email?.message
                                        : ""
                                }
                            />
                        )}
                    />
                </Grid>

                <Grid item>
                    <Link href={"/forgotPassword"}>
                        <Button
                            variant="text"
                            color="inherit"
                            style={{ textAlign: "left" }}
                        >
                            Esqueceu a senha?
                        </Button>
                    </Link>
                </Grid>
                {(!!methods.formState.errors.email ||
                    !!methods.formState.errors.password) && (
                        <Grid item xs={12}>
                            <span style={{ color: "red" }}>Senha ou email inválido(s).</span>
                        </Grid>
                    )}
                <Grid container direction="row" style={{ height: "50px" }} mt={2}>
                    <Grid item xs={6} pr={1}>
                        <Button
                            onClick={handleGoBack}
                            variant="outlined"
                            fullWidth
                            style={{ height: "100%" }}
                            color={"inherit"}
                        >
                            Voltar
                        </Button>
                    </Grid>
                    <Grid item xs={6} pl={1}>
                        <Button
                            type="submit"
                            variant="outlined"
                            fullWidth
                            style={{ height: "100%" }}
                            color={"inherit"}
                        >
                            Entrar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
