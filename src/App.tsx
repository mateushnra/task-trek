import { Plus } from 'phosphor-react'
import { Header } from './components/Header.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import { Task } from './components/Task.tsx'

import styles from "./App.module.css"
import { ChangeEvent, FormEvent, useState } from 'react'

export interface TaskProps {
  content: string;
  onDeleteTask: (task:string, isChecked:boolean) => void
  onCheckboxChange: (isChecked: boolean) => void
}

export interface InfoTaskProps{
  totalTasks: number;
  completeTasks: number;
  pendingTasks: number;
}

export const App = () => {
  const [newTaskText, setNewTaskText] = useState('')
  const [tasks, setTasks] = useState<string[]>([])

  const [totalTasks, setTotalTasks] = useState(0)
  const [completeTasks, setCompleteTasks] = useState(0)
  const [pendingTasks, setPendingTasks] = useState(0)

  const isNewTaskEmpty = newTaskText.length == 0

  const handleCreateNewTask = (e: FormEvent) => {
    e.preventDefault()
    setTasks([...tasks, newTaskText])

    setTotalTasks((prevTotalTasks) => prevTotalTasks + 1);
    setPendingTasks((prevPendingTasks) => prevPendingTasks + 1);
  }

  const handleNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
      setNewTaskText(e.target.value)
  }

  const handleTaskCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      setCompleteTasks((prevCompleteTasks) => prevCompleteTasks + 1);
      setPendingTasks((prevPendingTasks) => prevPendingTasks - 1);
    } else {
      setCompleteTasks((prevCompleteTasks) => prevCompleteTasks - 1);
      setPendingTasks((prevPendingTasks) => prevPendingTasks + 1);
    }
  }

  const onDeleteTask = (taskToDelete: string, isChecked: boolean) => {
      const tasksWithoutDeletedOne = tasks.filter(task => taskToDelete !== task)
      setTasks(tasksWithoutDeletedOne)

      if (isChecked) {
        setCompleteTasks((prevCompleteTasks) => prevCompleteTasks - 1);
      } else {
        setPendingTasks((prevPendingTasks) => prevPendingTasks - 1);
      }

      setTotalTasks((prevTotalTasks) => prevTotalTasks - 1);
  }

  return (
    <>
      <Header/>
      <main className={styles.wrapper}>
        <Sidebar totalTasks={totalTasks} completeTasks={completeTasks} pendingTasks={pendingTasks}/>
        <div>
          <form onSubmit={handleCreateNewTask} className={styles.formAddTask}>
            <input 
              type="text"
              onChange={handleNewTaskChange}
              value={newTaskText}
              required 
              placeholder="Digite a tarefa"
            />
            <button 
              type="submit"
              disabled={isNewTaskEmpty}>
                Adicionar <Plus size={20}/>
            </button>
          </form>

          <h2 className={styles.title}>Minhas Tarefas</h2>

          {tasks.map(content => <Task key={content} content={content} onDeleteTask={onDeleteTask} onCheckboxChange={handleTaskCheckboxChange}/>)}
        </div>
      </main>
    </>
  )
}
