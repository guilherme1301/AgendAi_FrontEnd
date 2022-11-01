import React from "react";
import styles from "../../../../styles/EdicaoEmpresa.module.css";

import TextField from '@mui/material/TextField';

export default function idService() {
 
  return (
      <div className={styles.body}>
        <div className={styles.salvarAlteracoes}>Salvar Alterações</div>
        <div className={styles.return}>
            <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black"/>
            </svg>
            <h3>Voltar</h3>
        </div>

        <div className={styles.edicao}>
          <p className={styles.edicaoTitulo}>Edição de Perfil</p>

          <div className={styles.alterarLogo}>
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="178" height="178" rx="7" fill="#EFEFF0"/>
              <path d="M6 6L174 174" stroke="#AFB1B6" stroke-width="2"/>
              <path d="M174 6L6 174" stroke="#AFB1B6" stroke-width="2"/>
              <rect x="1" y="1" width="178" height="178" rx="7" stroke="#AFB1B6" stroke-width="2"/>
            </svg>
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
              // onChange={() => setUser(user.name)}
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
              // onChange={() => setUser(user.name)}
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
              // onChange={() => setUser(user.name)}
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
              // onChange={() => setUser(user.name)}
          />
        </div>
        <div className={styles.fotos}>
          <div className={styles.fotoPrincipal}>
            <svg width="475" height="263" viewBox="0 0 475 263" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="473" height="261" rx="7" fill="#EFEFF0"/>
              <path d="M6 6L469 257" stroke="#AFB1B6" stroke-width="2"/>
              <path d="M469 6L5.99999 257" stroke="#AFB1B6" stroke-width="2"/>
              <rect x="1" y="1" width="473" height="261" rx="7" stroke="#AFB1B6" stroke-width="2"/>
            </svg>
            <p>Alterar Foto</p>
          </div>
          <div className={styles.fotosFlex}>
            <div>
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="178" height="178" rx="7" fill="#EFEFF0"/>
                  <path d="M6 6L174 174" stroke="#AFB1B6" stroke-width="2"/>
                  <path d="M174 6L6 174" stroke="#AFB1B6" stroke-width="2"/>
                  <rect x="1" y="1" width="178" height="178" rx="7" stroke="#AFB1B6" stroke-width="2"/>
              </svg>
              <p>Alterar Foto</p>
            </div>
            <div>
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="178" height="178" rx="7" fill="#EFEFF0"/>
                  <path d="M6 6L174 174" stroke="#AFB1B6" stroke-width="2"/>
                  <path d="M174 6L6 174" stroke="#AFB1B6" stroke-width="2"/>
                  <rect x="1" y="1" width="178" height="178" rx="7" stroke="#AFB1B6" stroke-width="2"/>
              </svg>
              <p>Alterar Foto</p>
            </div>
            <div>
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="178" height="178" rx="7" fill="#EFEFF0"/>
                  <path d="M6 6L174 174" stroke="#AFB1B6" stroke-width="2"/>
                  <path d="M174 6L6 174" stroke="#AFB1B6" stroke-width="2"/>
                  <rect x="1" y="1" width="178" height="178" rx="7" stroke="#AFB1B6" stroke-width="2"/>
              </svg>
              <p>Alterar Foto</p>
            </div>
          </div>
        </div>
      </div>
      
  );
}
