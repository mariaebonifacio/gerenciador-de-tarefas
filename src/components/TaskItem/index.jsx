import { useState } from "react";
import styles from "./TaskItem.module.css"

// recebe todos os itens
export default function TaskItem({
    task,
    // Faz a verificação
    toggleTask,
    // deleta
    deleteTask,
    // edita
    editTask,
    // falar se ela ta completa ou não
    isCompletedList = false,
}) {
    // eu carreguei na minha tela e eu nao estou editando (padrão)
    // recebe falso
    const [isEditing, setIsEditing] = useState(false)
    // editar o texto da tarefa
    // carrega o texto da tarefa
    const [newText, setNewText] = useState(task.text)

    // vou definir o que vai acontecer uqando eu clicar (interação com a tela)
    // receber
    // verificar se esta completa, o texto, se tiver um novo texto
    // renderização - junção do html com o javaScript
    // traz informação de cada componente
    const handleEdit = () => {
        if (isCompletedList) return
        if (isEditing && newText.trim()) {
            editTask(task.id, newText)
        }
        setIsEditing(!isEditing)
    }

    return(
        <li className={styles.item}>
            {isEditing ? (
                <input
                    className={styles.input}
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span
                        className={`${styles.text} ${
                            task.completed ? styles.completed : ""
                    } ${isCompletedList ? styles.completedHighLight : ""}`}
                    onClick={() => !isCompletedList && toggleTask(task.id)}
                >
                    {task.text}
                </span>
            )}

            <div className={styles.actions}>
                {isCompletedList && (
                    <button onClick={handleEdit} className={styles.edit}>
                        {isEditing ? "💾" : "✏️"}
                    </button>
                )}
                <button
                    onClick={() => deleteTask(task.id)}
                    className={styles.delete}
                >
                    {isCompletedList ? "↩️" : "X"}
                </button>
                
            </div>
        </li>
    )
}