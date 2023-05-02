import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from 'react';



export default function Navbar() {

    const [isTop, setisTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    function handleScroll() {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 0) {
            setisTop(true);
        } else if (scrollTop === 0) {
            setisTop(false);
        }
    }

    return (
        <nav className={isTop ? styles.navbar1 : styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/images/pokeball.png" alt="Pokeball" width={30} height={30} />
                    </Link>
                    <Link href="/" className={styles.pokedex}>
                        <h1>Pokedex</h1>
                    </Link>
                </div>
                <ul className={styles.mainMenu}>
                    <li>
                        <Link href="/" className={styles.texto}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className={styles.texto}>Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}