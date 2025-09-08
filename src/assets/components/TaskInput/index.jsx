import { useState } from "react"
import styles from "./TaskInput.module.css"

export default function TaskInput ({ addTask }) {
    const [value, setValue] = useState ("")

    // ele vai percorrer a lista do "addTask" e vai adicionando as tarefas
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value.trim()) return
        addTask(value)
        setValue("")
    }

    return(
        <form className="{styles.form}" onSubmit={handleSubmit}>
            <input type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Digite sua tarefa..."
            className={styles.input}
        />
            <button type="submit" className="{styles.button}">
                Adicionar
            </button>
        </form>
    )

}