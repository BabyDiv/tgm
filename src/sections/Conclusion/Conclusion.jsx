"use client";

import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Conclusion.module.scss';


export default function Conclusion() {

  const { t } = useLanguage();

  return (
    <section className={styles.conclusion}>
      <p
        className={styles.conclusion__text}
        dangerouslySetInnerHTML={{ __html: t('conclusion text') }}
      />
  </section>
  )
}