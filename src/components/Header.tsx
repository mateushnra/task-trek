import styles from './Header.module.css'
import logoTaskTrek from '../assets/logoTaskTrek.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img 
                src={logoTaskTrek}
                alt="Logotipo do Task Trek"
            />
        </header>
    )
}