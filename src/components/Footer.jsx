import styles from '../styles/Footer.module.css'

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <p><span>Pokedex</span> &copy; 2023</p>
            <p>Criado por <a href='https://github.com/ThiagoS1lva' target='blank'>Thiago Oliveira</a></p>
        </footer>
    )
}