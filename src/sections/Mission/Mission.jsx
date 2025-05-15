"use client";

import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Mission.module.scss';


export default function Mission() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.mission}>
    <h1 className={styles.mission__title}>{t('mission title')}</h1>
    <p
      className={styles.mission__text}
      dangerouslySetInnerHTML={{ __html: t('mission text 1') }}
    />
    <p
      className={styles.mission__text}
      dangerouslySetInnerHTML={{ __html: t('mission text 2') }}
    />
  </section>
  )
}