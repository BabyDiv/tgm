"use client";

import { useEffect, useRef, useState } from 'react';
import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';
import styles from './Management.module.scss';

export default function Management() {

  const { t } = useLanguage();

  return (
    <section className={styles.management}>
      <h1 className={styles.management__heading}>
        {t('management heading')}
      </h1>

      <p className={styles.management__text} 
        dangerouslySetInnerHTML={{ __html: t('management text') }} 
      />

      <h2 className={styles.management__title}>
        {t('management section1 title')}
      </h2>
      <p className={styles.management__text} 
        dangerouslySetInnerHTML={{ __html: t('management section1 text') }} 
      />
      <ul className={styles.management__list}>
        <li className={styles.management__item}>
          {t('management section1 item1')}
        </li>
        <li className={styles.management__item}>
          {t('management section1 item2')}
        </li>
        <li className={styles.management__item}>
          {t('management section1 item3')}
        </li>
      </ul>

      <h2 className={styles.management__title}>
        {t('management section2 title')}
      </h2>
      <p className={styles.management__text}>
        {t('management section2 text')}
      </p>
      <ul className={styles.management__list}>
        <li className={styles.management__item}>
          {t('management section2 item1')}
        </li>
        <li className={styles.management__item}>
          {t('management section2 item2')}
        </li>
        <li className={styles.management__item}>
          {t('management section2 item3')}
        </li>
        <li className={styles.management__item}>
          {t('management section2 item4')}
        </li>
        <li className={styles.management__item}>
          {t('management section2 item5')}
        </li>
        <li className={styles.management__item}>
          {t('management section2 item6')}
        </li>
      </ul>

      <h2 className={styles.management__title}>
        {t('management section3 title')}
      </h2>
      <p className={styles.management__text}>
        {t('management section3 text')}
      </p>
      <ul className={styles.management__list}>
        <li className={styles.management__item}>
          {t('management section3 item1')}
        </li>
        <li className={styles.management__item}>
          {t('management section3 item2')}
        </li>
        <li className={styles.management__item}>
          {t('management section3 item3')}
        </li>
        <li className={styles.management__item}>
          {t('management section3 item4')}
        </li>
      </ul>

      <h2 className={styles.management__title}>
        {t('management section4 title')}
      </h2>
      <p className={styles.management__text} 
        dangerouslySetInnerHTML={{ __html: t('management section4 text') }} 
      />
      <ul className={styles.management__list}>
        <li className={styles.management__item}>
          {t('management section4 item1')}
        </li>
        <li className={styles.management__item}>
          {t('management section4 item2')}
        </li>
        <li className={styles.management__item}>
          {t('management section4 item3')}
        </li>
      </ul>

      <h2 className={styles.management__title}>
        {t('management section5 title')}
      </h2>
      <p className={styles.management__text}
       dangerouslySetInnerHTML={{ __html: t('management section5 text') }}
      >
      </p>
      <ul className={styles.management__list}>
        <li className={styles.management__item}>
          {t('management section5 item1')}
        </li>
        <li className={styles.management__item}>
          {t('management section5 item2')}
        </li>
        <li className={styles.management__item}>
          {t('management section5 item3')}
        </li>
        <li className={styles.management__item}>
          {t('management section5 item4')}
        </li>
      </ul>

      <h2 className={styles.management__title}>
        {t('management section6 title')}
      </h2>
      <p className={styles.management__text} 
        dangerouslySetInnerHTML={{ __html: t('management section6 text') }} 
      />
      <ul className={styles.management__list}>
        <li className={styles.management__item}>{t('management section6 item1')}</li>
        <li className={styles.management__item}>{t('management section6 item2')}</li>
        <li className={styles.management__item}>{t('management section6 item3')}</li>
        <li className={styles.management__item}>{t('management section6 item4')}</li>
      </ul>

      <h2 className={styles.management__title}>
        {t('management section7 title')}
      </h2>
      <p className={styles.management__text} 
        dangerouslySetInnerHTML={{ __html: t('management section7 text') }} 
      />
      <ul className={styles.management__list}>
        <li className={styles.management__item}>{t('management section7 item1')}</li>
        <li className={styles.management__item}>{t('management section7 item2')}</li>
        <li className={styles.management__item}>{t('management section7 item3')}</li>
      </ul>

      <h2 className={styles.management__title}>
        {t('management section8 title')}
      </h2>
      <p className={styles.management__text}>
        {t('management section8 text')}
      </p>
      <ul className={styles.management__list}>
        <li className={styles.management__item}>{t('management section8 item1')}</li>
        <li className={styles.management__item}>{t('management section8 item2')}</li>
        <li className={styles.management__item}>{t('management section8 item3')}</li>
        <li className={styles.management__item}>{t('management section8 item4')}</li>
      </ul>

      <h2 className={styles.management__title}>
        {t('management section9 title')}
      </h2>
      <p className={styles.management__text} 
        dangerouslySetInnerHTML={{ __html: t('management section9 text') }} 
      />
      <ul className={styles.management__list}>
        <li className={styles.management__item}>{t('management section9 item1')}</li>
        <li className={styles.management__item}>{t('management section9 item2')}</li>
        <li className={styles.management__item}>{t('management section9 item3')}</li>
      </ul>
    
    </section>
  )
}