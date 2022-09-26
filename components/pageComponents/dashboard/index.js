import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import styles from'../../../styles/SearchService.module.css'

export default function Dashboard({type}){

  return (
    <>
        <Typography>Dashboard {type || "geral"}</Typography>
    </>
  );
}
