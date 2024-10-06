import React from 'react';
import { getImageUrl } from '../../../utils';
import styles from "./About.module.css"; 

export const About = () => {
    return ( 
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Sobre</h2>
            <div className={styles.content}>
                <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Meu perfil"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/cursorIcon.png")} 
                        alt="Cursor Icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvedora Frontend</h3>
                            <p>Tenho experiência com projetos simples de front-end em HTML, CSS, Bootstrap, JavaScript e estou aprendendo React.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/serverIcon.png")} 
                        alt="Server Icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvedora Back-end</h3>
                            <p>Já desenvolvi aplicações back-end com Django, incluindo a criação de uma aplicação de gerenciamento de tarefas (List To Do). Além disso, construí APIs RESTful utilizando FastAPI.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};