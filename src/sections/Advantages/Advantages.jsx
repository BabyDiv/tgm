"use client";

import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Advantages.module.scss';

export default function Advantages() {

  const { t } = useLanguage();

  return (
    <section className={styles.advantages}>
      <h2 className={styles.advantages__title}>
        {t('management advantages title')}
      </h2>
      <ul className={styles.advantages__list}>
        <li className={styles.advantages__item} dangerouslySetInnerHTML={{ __html: t('management advantages item1') }} />
        <li className={styles.advantages__item} dangerouslySetInnerHTML={{ __html: t('management advantages item2') }} />
        <li className={styles.advantages__item} dangerouslySetInnerHTML={{ __html: t('management advantages item3') }} />
        <li className={styles.advantages__item} dangerouslySetInnerHTML={{ __html: t('management advantages item4') }} />
      </ul>
    </section>
  )
}
