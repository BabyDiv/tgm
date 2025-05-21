"use client";

import Image from 'next/image';
import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Design.module.scss';

export default function Design() {

  const { t } = useLanguage();

  return (
    <section className={styles.design}>
      <h1 className={styles.design__heading}>
        {t("design heading")}
      </h1>
      <h2 className={styles.design__title}>
        {t("design introduction title")}
      </h2>
      <p className={styles.design__text} 
        dangerouslySetInnerHTML={{ __html: t("design introduction text") }}
      >
      </p>
      <h2 className={styles.design__title}>
        {t("design needs title")}
      </h2>
      <p className={styles.design__text}
        dangerouslySetInnerHTML={{ __html: t("design needs text") }}
      >
      </p>
      <h2 className={styles.design__title}>
        {t("design approach title")}
      </h2>
      <p className={styles.design__text}>
        {t("design approach text1")}
      </p>
      <p className={styles.design__text}>
        {t("design approach text2")}
      </p>
      <h2 className={styles.design__title}>
      {t("design offerings title")}
      </h2>
      <div className={styles.design__offerings}>
        <p className={styles.design__text}>
          {t("design offerings text1")}
        </p>
        <ul className={styles.design__list}>
          <li className={styles.design__item}
            dangerouslySetInnerHTML={{ __html: t("design offerings item1") }}
          >
          </li>
          <li className={styles.design__item}
            dangerouslySetInnerHTML={{ __html: t("design offerings item2") }}
          >
          </li>
        </ul>
        <p className={styles.design__text}>
          {t("design offerings text2")}
        </p>
      </div>
      <h2 className={styles.design__title}>
        {t("design conclusion title")}
      </h2>
      <p className={styles.design__conclusion}
        dangerouslySetInnerHTML={{ __html: t("design conclusion text") }}
      >
      </p>
    </section>
  )
}
