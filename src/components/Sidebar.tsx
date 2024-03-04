import styles from './Sidebar.module.css'
import { InfoTaskProps } from '../App.tsx'
import { CheckCircle, ListBullets, Article } from 'phosphor-react';

export interface infoTask {
    label: string;
    icon: string;
    contagem: number;
}

export const Sidebar = ({totalTasks, completeTasks, pendingTasks}: InfoTaskProps) => {

    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.title}>Visão Geral</h2>

            <div className={styles.containerInfoTask}>
                <div className={styles.infoTask}>
                    <h3>Total de tarefas</h3>
                    <ListBullets size={40} className={styles.iconSvg}/>
                    <strong>{totalTasks}</strong>
                </div>
                <div className={styles.infoTask}>
                    <h3>Tarefas concluídas</h3>
                    <CheckCircle size={40} className={styles.iconSvg}/>
                    <strong>{completeTasks}</strong>
                </div>
                <div className={styles.infoTask}>
                    <h3>Tarefas pendentes</h3>
                    <Article size={40} className={styles.iconSvg}/>
                    <strong>{pendingTasks}</strong>
                </div>
            </div>
        </aside>
    )
}