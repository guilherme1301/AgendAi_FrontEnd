import React, { useEffect, useState } from "react";
import  Button from '@mui/material/Button';

export default function gerenciarServicoComponent() {
  return (
    <>
        <div>
            <div>Empresa LTDA</div>
            <div>Gerenciar Serviços</div>
            <Button variant="outlined">Adicione ou exclua seus serviços no botão ao lado</Button>
            <div>Agendamentos Pendentes</div>
            <Button variant="outlined">Corte de Cabelo - Júlio César - Quinta - Feira (25/08) - 15:00h</Button>
            <Button variant="outlined">Tingimento de Cabelo - Cleberson - Sexta - Feira (26/08) - 18:00h</Button>
            <Button variant="outlined">Corte de Cabelo - Gabriel - Segunda - Feira (29/08) - 09:00h</Button>
            <div>Agendamentos Confirmados</div>
            <Button variant="outlined">Corte de Cabelo - Júlio César - Quinta - Feira (25/08) - 15:00h</Button>
            <Button variant="outlined">Tingimento de Cabelo - Cleberson - Sexta - Feira (26/08) - 18:00h</Button>
            <Button variant="outlined">Corte de Cabelo - Gabriel - Segunda - Feira (29/08) - 09:00h</Button>
        </div>
        <div>
          <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="398" height="248" rx="7" fill="#EFEFF0"/>
              <path d="M6 6L394 244" stroke="#AFB1B6" stroke-width="2"/>
              <path d="M394 6L5.99999 244" stroke="#AFB1B6" stroke-width="2"/>
              <rect x="1" y="1" width="398" height="248" rx="7" stroke="#AFB1B6" stroke-width="2"/>
          </svg>
          <div>Alterar logo</div>
          <form>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <label>
            E-mail:
            <input type="text" name="E-mail" />
          </label>
          <label>
            Telefone:
            <input type="text" name="Telefone" />
          </label>
          <label>
            Descrição da Empresa:
            <input type="text" name="Descrição da Empresa" />
          </label>
          <Button variant="outlined">Atualizar Perfil</Button>
        </form>
        </div>
    </>
  );
}
