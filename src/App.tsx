import { Plus } from 'phosphor-react'
import { Header } from './components/Header.tsx'
import { Sidebar } from './components/Sidebar.tsx'

import styles from "./App.module.css"

export const App = () => {
  return (
    <>
      <Header/>
      <main className={styles.wrapper}>
        <Sidebar/>
        <div>
          <form className={styles.formAddTask}>
            <input type="text" placeholder="Digite a tarefa"/>
            <button type="submit">Adicionar <Plus size={20}/></button>
          </form>

          <h2 className={styles.title}>Minhas Tarefas</h2>
        </div>
      </main>
    </>
  )
}
