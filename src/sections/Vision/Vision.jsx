"use client";

import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Vision.module.scss';

export default function Vision() {

  const { t } = useLanguage();

  return (
    <section className={styles.vision}>
      <div className={styles.vision__kvint}>
        <h1 className={styles.vision__title}>{t("mission and vision title")}</h1>
        <p
          className={styles.vision__text}
          dangerouslySetInnerHTML={{ __html: t("mission and vision text") }}
        >
        </p>
      </div>
      <div className={styles.vision__vision}>
        <h2 className={styles.vision__title}>{t("vision title")}</h2>
        <p
          className={styles.vision__text}
          dangerouslySetInnerHTML={{ __html: t("vision text") }}
        >
        </p>
      </div>
    </section>
  )
}
