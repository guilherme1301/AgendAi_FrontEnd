import React, { useContext, useEffect, useState } from "react";
import styles from "../../../../styles/EdicaoEmpresa.module.css";
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";
import { Context } from "../../../../pages/contexts/userContext";
import axios from 'axios'
import { useRouter } from "next/router";

export default function idService() {
  const { isLogged, userData, type } = useContext(Context);
  const [user, setUser] = useState({name: '', email: '', telefone: '', description: ''})
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if(type !== "shop"){
        router.push('/')
      }
    }
  }, [type])

  const updateProfile = async () => {
    const {data} = await axios.put("https://agendai-api.herokuapp.com/user-shop?id="+JSON.parse(userData).id, user)
  }

  return (
      <div className={styles.body}>
        <div className={styles.return}>
            <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black"/>
            </svg>
            <h3 onClick={() => router.back()}>Voltar</h3>
        </div>

        <div className={styles.edicao}>
          <p className={styles.edicaoTitulo}>Edição de Perfil</p>

          <div className={styles.alterarLogo}>
            <div>
                <img className={styles.imagemPerfil} src="https://t.ctcdn.com.br/63V25kDFoZnMMF2WjQavNUcoawY=/400x400/smart/filters:format(webp)/i618809.png"></img>
            </div>
            <p>Alterar Logo</p>
          </div>

          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome da Empresa:"
              type="email"
              fullWidth
              variant="standard"
              placeholder="Cássio"
              onChange={(e) => setUser((prevState) => ({...prevState, name: e.target.value}))}
              className={styles.campo}
          />
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="E-mail:"
              type="email"
              fullWidth
              variant="standard"
              placeholder="Cássio"
              onChange={(e) => setUser((prevState) => ({...prevState, email: e.target.value}))}
              className={styles.campo}
          />
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Telefone:"
              type="email"
              fullWidth
              variant="standard"
              placeholder="Cássio"
              onChange={(e) => setUser((prevState) => ({...prevState, telefone: e.target.value}))}
              className={styles.campo}
          />
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Descrição da Empresa:"
              type="email"
              fullWidth
              variant="standard"
              placeholder="Cássio"
              onChange={(e) => setUser((prevState) => ({...prevState, description: e.target.value}))}
              className={styles.campo}
          />
        </div>
        <div className={styles.fotos}>
          <div className={styles.fotoPrincipal}>
            <div >
                <img width="475" height="263" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"></img>
            </div>
            {/* <p>Alterar Foto</p> */}
          </div>
          <div className={styles.fotosFlex}>
            <div>
              <img width="180" height="180" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"></img> 
              {/* <p>Alterar Foto</p>  */}
            </div>
          <div>
            <img width="180" height="180" src="https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
            {/* <p>Alterar Foto</p> */}
          </div>
          <div>
            <img width="180" height="180" src="https://plus.unsplash.com/premium_photo-1664455462852-a23fef8aeb94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"></img>
            {/* <p>Alterar Foto</p> */}
          </div>
          </div>
        </div>
        <div className={styles.salvarAlteracoes} onClick={() => updateProfile()}>Salvar Alterações</div>
      </div>
      
  );
}
