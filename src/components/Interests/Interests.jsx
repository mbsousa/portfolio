import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Interests.module.css"; 

export const Interests = () => {
    return (
        <section className={styles.container} id="interests">
            <h2 className={styles.title}>Áreas de Interesses</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/warning.png")} 
                            alt="Warning icon" 
                            className={styles.aboutImage}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvimento Web</h3>
                            <p>Interesse em atuar no desenvolvimento web completo, desde interfaces front-end interativas até funcionalidades no back-end, utilizando HTML, CSS, JavaScript, Django, FastAPI e SQL. Estou interessada em expandir meus conhecimentos e habilidades na área.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/avatar.png")} 
                            alt="Avatar icon" 
                            className={styles.aboutImage}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvimento Front-End</h3>
                            <p>Interesse em desenvolver interfaces dinâmicas e responsivas, utilizando HTML, CSS, JavaScript e React. Foco em criar experiências de usuário intuitivas e visualmente atraentes, com atenção à usabilidade e performance. Estou à procura de um estágio para ganhar experiência prática e aprimorar ainda mais minhas habilidades.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
);
}