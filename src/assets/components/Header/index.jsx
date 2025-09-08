import styles from "./Header.module.css"

export default function Header(){
    return(
        <header className={styles.header}>
            <h1>Gerenciador de Tarefas</h1>
        </header>
    )
}