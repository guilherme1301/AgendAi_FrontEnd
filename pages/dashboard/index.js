import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import BasePage from "../../components/pageComponents/basePage";
import styles from "../../styles/Home.module.css";
import { Typography } from "@mui/material";
import Dashboard from "../../components/pageComponents/dashboard";

export default function dashboardGeneral(props) {
  const [isLogged, setIsLogged] = useState(true);
  useEffect(()=> {
  }, [])
  return (
    <>
      {/* <Dashboard type={userData?.type} /> */}
    </>
  );
}
