"use client";

import '../../styles/main.scss';
import styles from './Summary.module.scss';
import { useLanguage } from '../../context/LanguageContext';

export default function Summary() {

  const { t } = useLanguage();

  return (
    <section className={styles.summary}>
      <p className={styles.summary__text}
        dangerouslySetInnerHTML={{ __html: t('management summary text') }} 
      />
    </section>  
  )
}
