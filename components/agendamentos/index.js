import { useState } from "react";
import styles from "../../styles/Agendamentos.module.css";
import DialogCancel from "../dialogCancel";
import DialogAdd from "../dialogAdd";

export default function Agendamentos({ children }) {
    const [listService, setListService] = useState(
        [
            {
                service: "Corte de Cabelo",
                name: "Julio Cesar",
                day: "Quinta feira (25/08)",
                hour: "15:00h",
            },
            {
                service: "Corte de Cabelo",
                name: "Julio Cesar",
                day: "Quinta feira (25/08)",
                hour: "15:00h",
            },
            {
                service: "Corte de Cabelo",
                name: "Julio Cesar",
                day: "Quinta feira (25/08)",
                hour: "15:00h",
            }
        ]
    );
    
  return (
    <div className={styles.divContent}>
        <div>
            <div className={styles.subTitle}>Agendamentos Pendentes</div>
            {listService.map(item => (
                <div className={styles.divButton}>
                    {item.service} - {item.name} - {item.day} - {item.hour}
                    <div className={styles.accept}>
                        <DialogAdd/>
                        <DialogCancel/>
                    </div>
                </div>
            ))}
        </div>

        <div>
            <div className={styles.subTitle}>Agendamentos Confirmados</div>
            {listService.map(item => (
                <div className={styles.divButton}>
                    {item.service} - {item.name} - {item.day} - {item.hour}
                    <div className={styles.accept}>
                        <div></div>
                        <DialogCancel/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
