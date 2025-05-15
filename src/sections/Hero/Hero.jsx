"use client";

import { useEffect, useRef, useState } from 'react';
import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';
import styles from './Hero.module.scss';

export default function Hero() {
  const contentRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.add(styles.visible);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__background}></div>

      <div className={`${styles.hero__content} ${styles.container}`} ref={contentRef}>
        <p className={styles.hero__paragraph}>
          {t('hero')}
        </p>
        <div className={styles.hero__wrapper}>
          <a href="#" className={`${styles.button} ${styles.hero__button}`}>
            {t('contact us')}
          </a>
        </div>
      </div>
    </section>
  )
}