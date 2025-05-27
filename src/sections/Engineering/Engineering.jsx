"use client";

import Image from 'next/image';
import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Engineering.module.scss';

export default function Engineering() {

  const { t } = useLanguage();

  return (
    <section className={styles.engineering}>
    <h1 className={styles.engineering__heading}>
    {t("application engineering")}
    </h1>
    <p className={styles.engineering__desc}>
      {t("engineering desc")}
    </p>
    <h2 className={styles.engineering__tasks}>
      {t("engineering tasks")}
    </h2>
    <ol className={styles.engineering__list}>
      <li className={styles.engineering__item}
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title one')} ${t('engineering text one')}`,
        }}
      >
      </li>
      <li className={styles.engineering__item}
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title two')} ${t('engineering text two')}`,
        }}
      >
      </li>
      <li className={styles.engineering__item}
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title three')} ${t('engineering text three')}`,
        }}
      >
      </li>
      <li className={styles.engineering__item}
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title four')} ${t('engineering text four')}`,
        }}
      >
      </li>
      <li className={styles.engineering__item}
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title five')} ${t('engineering text five')}`,
        }}
      >
      </li>
    </ol>
    <p className={styles.engineering__summary}>
      {t("engineering summary")}
    </p>
    </section>
  )
}