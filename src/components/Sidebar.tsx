import styles from './Sidebar.module.css'
import { InfoTasks } from './InfoTasks.tsx'

export interface infoTask {
    label: string;
    icon: string;
    contagem: number;
}

const infoTasks: infoTask[] = [
    {label: 'Total de tarefas', icon: "ListBullets", contagem: 0},
    {label: 'Tarefas concluídas', icon: "CheckCircle", contagem: 1},
    {label: 'Tarefas pendentes', icon: "Article", contagem: 2}
]

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.title}>Visão Geral</h2>

            <div className={styles.containerInfoTask}>
                {infoTasks.map(info => {
                    return(
                        <InfoTasks 
                            label={info.label} 
                            icon={info.icon} 
                            contagem={info.contagem} 
                        />
                    )
                })}
            </div>
        </aside>
    )
}