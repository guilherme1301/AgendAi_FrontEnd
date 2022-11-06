import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import styles from'../../../styles/SearchService.module.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'start',
    border: "solid 1px black",
    borderRadius: "10px"
  }));


  export default function searchServiceComponent() {
    return (
        <>
            <div className={styles.return}>
                <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black"/>
                </svg>
                <h3 onClick={() => router.back()}>Voltar</h3>
            </div>
            
            <div className={styles.pegandoTodos}>
                <div className={styles.textoSobre}>
                    <p><b>Barbearia do Calvo e Careca</b></p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p><b>Endereço</b></p>
                    <p>
                    Rua Luiza Grinalda, 37 - Centro Vila Velha - ES
                    </p>
                    <p><b>Horário de Funcionamento</b></p>
                    <p><b>Segunda-Feira:</b> 09:00-21:30</p>
                    <p><b>Terça-Feira:</b> 09:00-21:30</p>
                    <p><b>Quarta-Feira:</b> 09:00-21:30</p>
                    <p><b>Quinta-Feira:</b> 09:00-21:30</p>
                    <p><b>Sexta-Feira:</b> 09:00-21:30</p>
                    <p><b>Sábado:</b> 09:00-21:30</p>
                    <p><b>Domingo:</b> FECHADO</p>
                </div>

                <div className={styles.cards40}>
                    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="398" height="248" rx="7" fill="#EFEFF0"/>
                        <path d="M6 6L394 244" stroke="#AFB1B6" stroke-width="2"/>
                        <path d="M394 6L5.99999 244" stroke="#AFB1B6" stroke-width="2"/>
                        <rect x="1" y="1" width="398" height="248" rx="7" stroke="#AFB1B6" stroke-width="2"/>
                    </svg>
                    <p>Serviço:</p>
                    <select>
                        <option value="manha">ABC</option>
                        <option value="tarde">WYZ</option>
                        <option value="noite">ASDF</option>
                    </select>
                    <p>Data:</p>
                        <button type="button">10/09</button>
                        <button type="button">11/09</button>
                        <button type="button">12/09</button>
                        <button type="button">13/09</button>
                        <button type="button">14/09</button>
                        <button type="button">15/09</button>
                        <button type="button">16/09</button>
                        <button type="button">17/09</button>
                        <button type="button">18/09</button>
                    <p>Horário:</p>
                    <select>
                        <option value="manha">Manhã</option>
                        <option value="tarde">Tarde</option>
                        <option value="noite">Noite</option>
                    </select>
                    <p><button type="button">Agendar</button></p>

                </div>
                
            </div>

        </>
      );
}
    