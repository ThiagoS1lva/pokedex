import Image from "next/image";
import styles from "../styles/About.module.css";
import { MdEmail } from "react-icons/md";
import {BsLinkedin, BsGithub} from "react-icons/bs";
export default function about() {

    return (
        <div className={styles.dad}>
            <h1>Sobre o projeto</h1>
            <div className={styles.container}>
                <div className={styles.texto}>
                    <h2>Sobre o que é o Pokedex</h2>
                    <p>O projeto de desenvolvimento de uma Pokedex utilizando Next.js tem como principal objetivo proporcionar uma experiência prática para aprender a programar com essa poderosa ferramenta. Além de ter a oportunidade de criar uma aplicação com uma interface amigável e atrativa, pude aplicar diversos conceitos e técnicas essenciais para o desenvolvimento web, como manipulação de APIs, utilização de componentes reutilizáveis, trabalhar com rotas dinâmicas, entre outros. </p>
                </div>
                <div className={styles.imagem}>
                    <Image src="/images/charmander.jpg" style={{ borderRadius: "10px" }} alt="charmander sentado no banco" width={600} height={400} layout="responsive" />
                </div>
            </div>
            <div className={styles.about}>
                <h1>Sobre mim</h1>
                <div>
                    <Image src='/images/eu.jpg' width={200} height={200} alt="Eu" style={{ borderRadius: "100px" }} />
                </div>
                <div className={styles.descricao}>
                    <p>&#8226; Olá, meu nome é Thiago Oliveira!</p>
                    <p>&#8226; Atualmente, sou um graduando em Ciência da Computação pela UERJ - Maracanã</p>
                    <p>&#8226; <b>Linguagens:</b> HTML5, CSS3, JavaScript, React.JS, Python, C e atualmente aprendendo Next.js.</p>
                    <p>&#8226; <b>Contato:</b></p>
                    <div className={styles.link}>
                        <a href="#" target="blank"><MdEmail size={30}/></a>
                        <a href="https://www.linkedin.com/in/thiago-oliveira-49952823a/" target="blank"><BsLinkedin size={30}/></a>
                        <a href="https://github.com/ThiagoS1lva" target="blank"><BsGithub size={30}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}