import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import BasePage from "../components/pageComponents/basePage";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import DashboardGeneral from './dashboard/index';
import { Context } from "./contexts/userContext";

export default function Home() {
  const {userData} = useContext(Context);

  return (
    <>
    <h1>UserData: {JSON.stringify(userData)}</h1>
      
    </>
  );
}
