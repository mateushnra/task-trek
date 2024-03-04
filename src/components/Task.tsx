import { TaskProps } from '../App.tsx'
import { Trash, Check} from 'phosphor-react'

import styles from './Task.module.css'
import { ChangeEvent, useState } from 'react'

export const Task = ({content, onDeleteTask, onCheckboxChange}: TaskProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleDeleteTaskClick = () => {
        onDeleteTask(content, isChecked)
    }

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setIsChecked(isChecked)
        onCheckboxChange(isChecked)
    }

    return (
        <span className={styles.containerTask}>
            <div>
                <input 
                    id={content}
                    className={styles.inputCheck}   
                    type="checkbox"
                    onChange={handleCheckboxChange} 
                    name="taskComplete"
                />
                <label className={styles.checkTask} htmlFor={content}>
                    <Check className={styles.iconCheck} size={16} weight={'bold'}/>
                </label>

                <p className={styles.taskContent}>{content}</p>
            </div>
            
            <Trash onClick={handleDeleteTaskClick} size={26} className={styles.iconTrash}/>
        </span>
    )
}