import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import BasePage from "../../components/pages/basePage";
import styles from "../../styles/Home.module.css";
import { Typography } from "@mui/material";

export default function dashboardGeneral() {
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    // if (!isLogged) router.push("/dashboard");
  }, [isLogged]);

  return (
    <>
        <Typography>
            Dashboard nao logado!
        </Typography>
    </>
  );
}
