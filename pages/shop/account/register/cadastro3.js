import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import HorarioFuncionamento from "../../../../components/buttons/horarioFuncionamento";
import styles from "../../../../styles/Cadastro.module.css";

const Cadastro1 = (props) => {
  const [name, setName] = useState();
  const { type, nextPage, previousPage, children } = props;
  const goToNextPage = () => {
    nextPage && nextPage();
  };

  const handleChange = () => {
    //setAge(event.target.value);
  };
  return (
    <>

      <Grid container>
        <h2 className={styles.title}>Quase la...</h2>
        <p>
          Registre o(s) tipo(s) de serviço(s) e os horários de funcionamento:{" "}
        </p>
        <Grid item xs={12} mt={1}>
          <label style={{ float: "left" }}>Serviços oferecidos:</label>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Escolha uma opção:
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Button fullWidth color="inherit" variant="outlined">
            +
          </Button>
        </Grid>

        <Grid item xs={12} mt={3}>
          <label style={{ float: "left" }}>Horário de funcionamento:</label>
          <HorarioFuncionamento day="segunda" />
          <HorarioFuncionamento day="terça" />
          <HorarioFuncionamento day="quarta" />
          <HorarioFuncionamento day="quinta" />
          <HorarioFuncionamento day="sexta" />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="outlined"
            fullWidth
            color="inherit"
            className={styles.nextBtn}
            onClick={goToNextPage}
          >
            Finalizar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Cadastro1;
