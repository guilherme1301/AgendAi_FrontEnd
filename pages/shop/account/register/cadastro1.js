import { Grid, TextField, Button } from '@mui/material'
import { useState } from 'react'
import styles from "../../../../styles/Cadastro.module.css";


const Cadastro1 = (props)=> {
    const [name, setName] = useState();
    const {type, nextPage, previousPage, children} = props
    const goToNextPage = () => {
        nextPage && nextPage();
    }

  return (
    <>
    
    <Grid container>  
      <h2 className={styles.title}>Vamos começar?</h2>
      <p>Primeiro defina as informações de acesso da sua conta.</p>
      <Grid item xs={12}>
        <TextField required id="name" label="Nome" value={name} fullWidth margin='normal'/>
        <TextField required id="email" label="E-mail" value={name} fullWidth margin='normal'/>
        <TextField required id="password" label="Senha" value={name} fullWidth margin='normal'/>
      </Grid>

      <Grid item xs={12}>
        <Button variant="outlined" fullWidth color='inherit' className={styles.nextBtn} onClick={goToNextPage}>Avançar</Button>
      </Grid>

    </Grid>
    </>
  )
}

export default Cadastro1
