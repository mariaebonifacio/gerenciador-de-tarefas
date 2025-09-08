import { useState, useEffect } from "react";
import styles from "./Clock.module.css";

export default function Clock(){
    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);

        return () => clearInterval(intervalo);

    }, []);

    return (
        <div className={styles.clock}>
         <p className={styles.horaAtual}>{horaAtual.toLocaleTimeString()}</p>
        <p className={styles.data}>
            {horaAtual.toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"

            })}
        </p>

       
        </div>
    );
}