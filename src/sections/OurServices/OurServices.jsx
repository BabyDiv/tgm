'use client';

import Image from 'next/image';
import styles from './OurServices.module.scss';

import '../../styles/main.scss';
import designIcon from '../../assets/design.svg';
import managementIcon from '../../assets/management.svg';
import engineeringIcon from '../../assets/engineering.svg';

import { useLanguage } from '../../context/LanguageContext';

export default function OurServices() {

  const { t } = useLanguage();

  return (
    <section className={styles.list}>
      <div className={styles.list__container}>
        <div className={styles.list__list}>

          <article className={`${styles.list__card} ${styles.card}`}>
          <div className={styles.card__img1}>
              <Image src={designIcon} alt="Design" width={86} height={84} />
            </div>
            <h3 className={styles.card__title}>{t('card one title')}</h3>
            <p className={styles.card__text} dangerouslySetInnerHTML={{ __html: t('card one text') }}>
            </p>
            <div className={styles.card__footer}>
              <a href="/engineering" className={`${styles.card__button} ${styles.button}`}>{t('info button')}</a>
            </div>
          </article>

          <article className={`${styles.list__card} ${styles.card}`}>
            <div className={styles.card__img2}>
              <Image src={managementIcon} alt="Management" width={86} height={84} />
            </div>
            <h3 className={styles.card__title}>{t('card two title')}</h3>
            <p className={styles.card__text} dangerouslySetInnerHTML={{ __html: t('card two text') }}>
            </p>
            <div className={styles.card__footer}>
              <a href="/design" className={`${styles.card__button} ${styles.button}`}>{t('info button')}</a>
            </div>
          </article>

          <article className={`${styles.list__card} ${styles.card}`}>
            <div className={styles.card__img3}>
              <Image src={engineeringIcon} alt="Engineering" width={86} height={84} />
            </div>
            <h3 className={styles.card__title}>{t('card three title')}</h3>
            <p className={styles.card__text} dangerouslySetInnerHTML={{ __html: t('card three text') }}>
            </p>
            <div className={styles.card__footer}>
              <a href="/management" className={`${styles.card__button} ${styles.button}`}>{t('info button')}</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
