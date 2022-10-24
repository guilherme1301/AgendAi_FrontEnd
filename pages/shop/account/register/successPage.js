import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import styles from "../../../../styles/Cadastro.module.css";

const Success = (props) => {
  const [name, setName] = useState();
  const { type, children } = props;
  return (
    <>
      <Grid container className={styles.container}>
        <h3>Conta criada com sucesso!</h3>
      </Grid>
    </>
  );
};

export default Success;
