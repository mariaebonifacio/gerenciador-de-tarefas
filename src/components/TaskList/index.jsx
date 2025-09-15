import TaskItem from "../TaslItem"
import styles from "./TaskList.module.css"

export default function TaskList({
    tasks,
    toggleTask, 
    deleteTask,
    editTask,
    isCompletedList = false,
}) {
    //Verificar se tem uma tarefa
    if (tasks.lenght === 0) {
        return(
            <p className={styles.empty}>
                {isCompletedList ? "Nenhuma tarefa concluída ainda." : "Nenhuma tarefa pendente."}
            </p>
        )
    }
}

return(
    <ul className={styles.list}>
        {task.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
            isCompletedList={isCompletedList}
            />
        ))}
    </ul>
)