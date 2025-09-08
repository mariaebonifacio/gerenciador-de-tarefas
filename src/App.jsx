import { useState, useEffect } from "react"
import Header from "./components/Header"
import TaskInput from "./components/TaskInput"
// import TaskList from "./components/TaskList"
import styles from "./App.module.css"
import Clock from "./components/Clock"


export default function App() {
  // Vai verificar se tem alguma tarefa no localStorage
  // Se houver, eke vai transformar em JSON e vai guardar
  // caso não, cria uma lista vazia
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved): []
  })

  // eleele vai pegar os dados da tarefa
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(),
      text: task, completed: false }])
  }

  // depois que o cara digitou eu tenho que colocar a tarefa no LocalStorage
  // todas as vezes que eu clicar em incluir ele tem que colocar a tarefa no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", 
      JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className={styles.container}>
      <Header />
      <Clock />
      <TaskInput addTask={addTask} />

      <div className={styles.listContaner}></div>

    </div>
  )
}


