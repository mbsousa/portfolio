import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"; 


export const Hero = () => {
  return ( 
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Beatriz</h1>
        <p className={styles.description}>Uma desenvolvedora web focada no frontend com experiências em back-end</p>
        <a href="email:mirellebeatriz7@gmail.com" className={styles.contactBtn}>
          Entre em contato comigo
        </a>
      </div>
      <img 
        src={getImageUrl('hero/heroImg.jpeg')} 
        alt="Minha foto"  
        className={styles.heroImg} 
      />
        <div className={StyleSheet.topBlur} />
        <div className={StyleSheet.bottomBlur} />
    </section>
  )
}