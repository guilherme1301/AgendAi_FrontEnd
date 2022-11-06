import React, { useEffect, useState } from "react";
import styles from "../../../styles/Dashboard.module.css";
import Agendamentos from "../../../components/agendamentos";
import { useRouter } from 'next/router'
import axios from "../../axios";

export default function dashboardEmpresa() {
    const router = useRouter()
    const [dadosAgendados, setDadosAgendados] = useState()
    const [dadosConfirmados, setdadosConfirmados] = useState()

    useEffect(() => {
        getDadosAgendados()
        getDadosConfirmados()
    }, [])

    console.log("agendados:", dadosAgendados)
    console.log("confirmdoados:", dadosConfirmados)

    async function getDadosAgendados() {
        await axios.get(`/schedule?status=awaiting`).
            then(({ data }) => {
                setDadosAgendados(data.payload)
            })
    }

    async function getDadosConfirmados() {
        await axios.get(`/schedule?status=confirmed`).
            then(({ data }) => {
                setdadosConfirmados(data.payload)
            })
    }

    return (
        <div className={styles.container}>

            <div className={styles.title}>Empresa LTDA</div>
            <div className={styles.body}>
                <div className={styles.divContent}>
                    <div>
                        <div className={styles.subTitle}>Gerenciar Serviços</div>
                        <div className={styles.divButton}>
                            Adicione, edite ou exclua seus serviços no botão ao lado
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.577 23.3007H7.753C4.312 23.3007 2 20.7851 2 17.0413V8.38093C2 4.63718 4.312 2.12155 7.753 2.12155H11.492C11.906 2.12155 12.242 2.47155 12.242 2.9028C12.242 3.33405 11.906 3.68405 11.492 3.68405H7.753C5.169 3.68405 3.5 5.5278 3.5 8.38093V17.0413C3.5 19.8945 5.169 21.7382 7.753 21.7382H16.577C19.161 21.7382 20.831 19.8945 20.831 17.0413V12.8455C20.831 12.4143 21.167 12.0643 21.581 12.0643C21.995 12.0643 22.331 12.4143 22.331 12.8455V17.0413C22.331 20.7851 20.018 23.3007 16.577 23.3007Z" fill="#128C7E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86737 16.0711H11.8444C12.2244 16.0711 12.5804 15.918 12.8494 15.6378L20.3584 7.81594C20.6664 7.49511 20.8364 7.06802 20.8364 6.61386C20.8364 6.15865 20.6664 5.73052 20.3584 5.40969L19.1414 4.14198C18.5044 3.48052 17.4684 3.48052 16.8304 4.14198L9.35737 11.9264C9.09837 12.1961 8.95137 12.5545 8.94237 12.9347L8.86737 16.0711ZM11.8444 17.6336H8.09837C7.89637 17.6336 7.70237 17.5482 7.56137 17.3972C7.42037 17.2472 7.34337 17.0441 7.34837 16.8326L7.44237 12.8961C7.46137 12.1128 7.76437 11.3764 8.29637 10.8211H8.29737L15.7704 3.03677C16.9924 1.76594 18.9794 1.76594 20.2014 3.03677L21.4184 4.30448C22.0114 4.92115 22.3374 5.74094 22.3364 6.61386C22.3364 7.48677 22.0104 8.30552 21.4184 8.92115L13.9094 16.743C13.3584 17.317 12.6244 17.6336 11.8444 17.6336V17.6336Z" fill="#128C7E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7308 10.3298C19.5388 10.3298 19.3468 10.2537 19.2008 10.1006L14.6348 5.34437C14.3418 5.03916 14.3418 4.54437 14.6348 4.23916C14.9278 3.93395 15.4018 3.93395 15.6948 4.23916L20.2608 8.99645C20.5538 9.30166 20.5538 9.79541 20.2608 10.1006C20.1148 10.2537 19.9228 10.3298 19.7308 10.3298" fill="#128C7E" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div className={styles.subTitle}>Editar Perfil</div>
                        <div className={styles.divButton}>
                            Edite as informações e fotos da sua empresa no botão ao lado
                            <svg onClick={() => router.push('/dashboard/empresa/123')} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.577 23.3007H7.753C4.312 23.3007 2 20.7851 2 17.0413V8.38093C2 4.63718 4.312 2.12155 7.753 2.12155H11.492C11.906 2.12155 12.242 2.47155 12.242 2.9028C12.242 3.33405 11.906 3.68405 11.492 3.68405H7.753C5.169 3.68405 3.5 5.5278 3.5 8.38093V17.0413C3.5 19.8945 5.169 21.7382 7.753 21.7382H16.577C19.161 21.7382 20.831 19.8945 20.831 17.0413V12.8455C20.831 12.4143 21.167 12.0643 21.581 12.0643C21.995 12.0643 22.331 12.4143 22.331 12.8455V17.0413C22.331 20.7851 20.018 23.3007 16.577 23.3007Z" fill="#128C7E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86737 16.0711H11.8444C12.2244 16.0711 12.5804 15.918 12.8494 15.6378L20.3584 7.81594C20.6664 7.49511 20.8364 7.06802 20.8364 6.61386C20.8364 6.15865 20.6664 5.73052 20.3584 5.40969L19.1414 4.14198C18.5044 3.48052 17.4684 3.48052 16.8304 4.14198L9.35737 11.9264C9.09837 12.1961 8.95137 12.5545 8.94237 12.9347L8.86737 16.0711ZM11.8444 17.6336H8.09837C7.89637 17.6336 7.70237 17.5482 7.56137 17.3972C7.42037 17.2472 7.34337 17.0441 7.34837 16.8326L7.44237 12.8961C7.46137 12.1128 7.76437 11.3764 8.29637 10.8211H8.29737L15.7704 3.03677C16.9924 1.76594 18.9794 1.76594 20.2014 3.03677L21.4184 4.30448C22.0114 4.92115 22.3374 5.74094 22.3364 6.61386C22.3364 7.48677 22.0104 8.30552 21.4184 8.92115L13.9094 16.743C13.3584 17.317 12.6244 17.6336 11.8444 17.6336V17.6336Z" fill="#128C7E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7308 10.3298C19.5388 10.3298 19.3468 10.2537 19.2008 10.1006L14.6348 5.34437C14.3418 5.03916 14.3418 4.54437 14.6348 4.23916C14.9278 3.93395 15.4018 3.93395 15.6948 4.23916L20.2608 8.99645C20.5538 9.30166 20.5538 9.79541 20.2608 10.1006C20.1148 10.2537 19.9228 10.3298 19.7308 10.3298" fill="#128C7E" />
                            </svg>
                        </div>
                    </div>
                </div>
                <Agendamentos usuario={false} listServicePending={dadosAgendados} listServiceConfirmed={dadosConfirmados} />
            </div>
        </div>
    );
}
