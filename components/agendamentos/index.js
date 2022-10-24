import { useEffect, useState } from "react";
import styles from "../../styles/Agendamentos.module.css";
import DialogCancel from "../dialogCancel";
import DialogAdd from "../dialogAdd";

export default function Agendamentos({ usuario, listServicePending, listServiceConfirmed }) {

    const [dadosAgendados, setDadosAgendados] = useState()
    const [dadosConfirmados, setdadosConfirmados] = useState()
    useEffect(() => {
        getDadosAgendados()
        getDadosConfirmados()
    }, [])

    console.log("agendados:", dadosAgendados)
    console.log("confirmdoados:", dadosConfirmados)

    function getDadosAgendados() {
        fetch('https://agendai-api.herokuapp.com/schedule?status=awaiting')
            .then(res => res.json())
            .then(data => {
                setDadosAgendados(data.payload)
            })
    }

    function getDadosConfirmados() {
        fetch('https://agendai-api.herokuapp.com/schedule?status=confirmed')
            .then(res => res.json())
            .then(data => {
                setdadosConfirmados(data.payload)
            })
    }
    return (
        <div className={styles.divContent}>

            {usuario &&

                <div style={{ marginTop: 40 }}>
                    <div className={styles.subTitle}>Procurar Serviços</div>
                    <div className={styles.divButton}>
                        <input className={styles.input} placeholder="Busque serviços" />
                        <div className={styles.buscar}>
                            buscar
                        </div>
                    </div>
                </div>
            }

            <div>
                <div className={styles.subTitle}>Agendamentos Pendentes</div>
                {dadosAgendados?.map(item => (
                    <div className={styles.divButton}>
                        {item.schedules.serviceDefault.name} - {item.userClient.name} - {item.time.day} - {item.time.time}
                        <div className={styles.accept}>
                            <div></div>
                            <DialogCancel />
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className={styles.subTitle}>Agendamentos Confirmados</div>
                {dadosConfirmados?.map(item => (
                    <div className={styles.divButton}>
                        {item.schedules.serviceDefault.name} - {item.userClient.name} - {item.time.day} - {item.time.time}
                        <div className={styles.accept}>
                            <div></div>
                            <DialogCancel />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
