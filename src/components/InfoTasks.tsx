import * as PhosphorIcons from 'phosphor-react';
import { infoTask } from './Sidebar.tsx'

import styles from './InfoTasks.module.css'

export const InfoTasks = ({label, icon, contagem}: infoTask) => {
    const IconComponent = PhosphorIcons[icon as keyof typeof PhosphorIcons] as React.ElementType;
    return (
        <div className={styles.containerInfoTask}>
            <h3>{label}</h3>
            <IconComponent size={40} className={styles.iconSvg}/>
            <strong>{contagem}</strong>
        </div>
    )
}