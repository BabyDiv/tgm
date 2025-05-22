'use client';

import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import styles from './About.module.scss';

export default function About() {

  const { t } = useLanguage();

  return (
    <section className={styles.about}>
      <div className={styles.about__us}>
        <h1 className={styles.about__title}>{t('about title')}</h1>
        <p className={styles.about__text}
          dangerouslySetInnerHTML={{ __html: t('about text')}}
        >			
        </p>
      </div>
      <div className={styles.about__join}>
        <h2 className={styles.about__title}>{t('why title')}</h2>
        <ul className={styles.about__list}>
          {[1, 2, 3, 4, 5].map((i) => (
            <li
              key={i}
              className={styles.about__item}
              dangerouslySetInnerHTML={{ __html: t(`why item${i}`) }}
            />
          ))}
        </ul>
      </div>
      <div className={styles.about__conclusion}>
        <p
          dangerouslySetInnerHTML={{ __html: t('about conclusion1') }}
        />
        <p
          dangerouslySetInnerHTML={{ __html: t('about conclusion2') }}
        />
      </div>
    </section> 
  )
}
