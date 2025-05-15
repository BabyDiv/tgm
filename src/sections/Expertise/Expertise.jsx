"use client";

import Image from 'next/image';
import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Expertise.module.scss';

export default function Expertise() {
  const { t } = useLanguage();

  return (
    <section className="expertise">
    <h1 className="expertise__heading">{t('expertise areas')}</h1>
  
    <ul className="expertise__list">
      <li className="expertise__item">
          <h2  className="expertise__title">{t('pumping equipment selection')}</h2>
          <p
            className="expertise__text"
            dangerouslySetInnerHTML={{ __html: t('pumping description') }}
          />
      </li>
      <li className="expertise__item">
        <h2 className="expertise__title">{t('equipment configuration')}</h2>
        <p className="expertise__text">
          {t('equipment configuration description')}
        </p>
      </li>
      <li className="expertise__item">
      <h2 className="expertise__title">{t('engineering calculations')}</h2>
        <p className="expertise__text">{t('engineering calculations description')}</p>
      </li>
      <li className="expertise__item">
        <h2 className="expertise__title">{t('technical documentation')}</h2>
        <p
            className="expertise__text"
            dangerouslySetInnerHTML={{ __html: t('technical documentation description') }}
          />
      </li>
      <li className="expertise__item">
        <h2 className="expertise__title">{t('deal support')}</h2>
        <p
            className="expertise__text"
            dangerouslySetInnerHTML={{ __html: t('deal support description') }}
          />
      </li>
      <li className="expertise__item">
        <h2 className="expertise__title">{t('sic')}</h2>
        <p className="expertise__text">
          {t('sic description')}
        </p>
      </li>
      <li className="expertise__item">
        <h2 className="expertise__title">{t('technical support')}</h2>
        <p
            className="expertise__text"
            dangerouslySetInnerHTML={{ __html: t('technical support description') }}
          />
      </li>
      <li className="expertise__item">
        <h2 className="expertise__title">{t('training services')}</h2>
        <p className="expertise__text">
          {t('training services description')}
        </p>
      </li>
    </ul>
  </section>
  )
}