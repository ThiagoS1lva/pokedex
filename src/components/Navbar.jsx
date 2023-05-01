import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" alt="Pokeball" width={30} height={30} />
                <h1>Pokedex</h1>
            </div>
            <ul className={styles.mainMenu}>
                <li>
                    <Link href="/" className={styles.texto}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.texto}>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}