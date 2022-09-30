import { useState } from "react";
import styles from "../../styles/Agendamentos.module.css";
import DialogCancel from "../dialogCancel";
import DialogAdd from "../dialogAdd";

export default function Agendamentos({ usuario, listServicePending, listServiceConfirmed }) {

    return (
        <div className={styles.divContent}>

            {usuario &&

                <div style={{ marginTop: 40 }}>
                    <div className={styles.subTitle}>Procurar Serviços</div>
                    <div className={styles.divButton}>
                        Busque serviços
                        <div className={styles.buscar}>
                            buscar
                        </div>
                    </div>
                </div>
            }

            <div>
                <div className={styles.subTitle}>Agendamentos Pendentes</div>
                {listServicePending.map(item => (
                    <div className={styles.divButton}>
                        {item.service} - {item.name} - {item.day} - {item.hour}
                        <div className={styles.accept}>
                            <DialogAdd />
                            <DialogCancel />
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className={styles.subTitle}>Agendamentos Confirmados</div>
                {listServiceConfirmed.map(item => (
                    <div className={styles.divButton}>
                        {item.service} - {item.name} - {item.day} - {item.hour}
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
