"use client";

import { useEffect, useRef, useState } from 'react';
import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';
import styles from './Intro.module.scss';

export default function Intro() {

  const { t } = useLanguage();

  return (
  <section className={styles.intro}>
    <div className={styles.intro__background}></div>

    <div className={` ${styles.intro__content} ${styles.container} `}>
      <h1 className={styles.intro__title}>{t('our services')}</h1>
    </div>
  </section>
  );
}
