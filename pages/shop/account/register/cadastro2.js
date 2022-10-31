import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import styles from "../../../../styles/Cadastro.module.css";


const Cadastro1 = (props) => {
  const [telefone, setTelefone] = useState();
  const [name, setName] = useState();
  const [cnpj, setCnpj] = useState();
  const [zipcode, setZipcode] = useState();
  const [rua, setRua] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const { type, nextPage, previousPage, children } = props;
  const goToNextPage = () => {
    nextPage && nextPage();
  };

  return (
    <>

      <Grid container>
        <h2 className={styles.title} style={{ textAlign: "left" }}>
          Otimo!
        </h2>
        <p className={styles.textAlgo}>Agora nos diga mais sobre a sua empresa.</p>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            label="Telefone"
            value={telefone}
            fullWidth
            margin="normal"
            className={styles.campo}
          />
          <TextField
            required
            id="cnpj"
            label="Cnpj"
            value={cnpj}
            fullWidth
            margin="normal"
            className={styles.campo}
          />
          <TextField
            required
            id="zipcode"
            label="Zipcode"
            value={zipcode}
            fullWidth
            margin="normal"
            className={styles.campo}
          />
          <TextField
            required
            id="rua"
            label="Rua"
            value={rua}
            fullWidth
            margin="normal"
            className={styles.campo}
          />
          <TextField
            required
            id="cidade"
            label="Cidade"
            value={cidade}
            fullWidth
            margin="normal"
            className={styles.campo}
          />
          <TextField
            required
            id="estado"
            label="Estado"
            value={estado}
            fullWidth
            margin="normal"
            className={styles.campo}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="outlined"
            fullWidth
            color="inherit"
            className={styles.nextBtn}
            onClick={goToNextPage}
          >
            Avançar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Cadastro1;
