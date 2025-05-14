"use client";

import Image from 'next/image';
import '../styles/main.scss';
import { useLanguage } from '../context/LanguageContext';

export default function Expertise() {
  const { t } = useLanguage();

  return (
    <section className="expertise">
    <h1 className="expertise__title">{t('expertise areas')}</h1>
  
    <ul className="expertise__list">
      <li className="expertise__item">
          <h2  className="expertise__item-title">{t('pumping equipment selection')}</h2>
          <p
            className="expertise__item-text"
            dangerouslySetInnerHTML={{ __html: t('pumping description') }}
          />
      </li>
      <li className="expertise__item">
        <h2 className="expertise__item-title">{t('equipment configuration')}</h2>
        <p className="expertise__item-text">
          {t('equipment configuration description')}
        </p>
      </li>
      <li className="expertise__item">
      <h2 className="expertise__item-title">{t('engineering calculations')}</h2>
        <p className="expertise__item-text">{t('engineering calculations description')}</p>
      </li>
      <li className="expertise__item">
        <h2 className="expertise__item-title">{t('technical documentation')}</h2>
        <p
            className="expertise__item-text"
            dangerouslySetInnerHTML={{ __html: t('technical documentation description') }}
          />
      </li>
      <li className="expertise__item">
        <h2 className="expertise__item-title">{t('deal support')}</h2>
        <p
            className="expertise__item-text"
            dangerouslySetInnerHTML={{ __html: t('deal support description') }}
          />
      </li>
      <li className="expertise__item">
        <h2 className="expertise__item-title">{t('sic')}</h2>
        <p className="expertise__item-text">
          {t('sic description')}
        </p>
      </li>
      <li className="expertise__item">
        <h2 className="expertise__item-title">{t('technical support')}</h2>
        <p
            className="expertise__item-text"
            dangerouslySetInnerHTML={{ __html: t('technical support description') }}
          />
      </li>
      <li className="expertise__item">
        <h2 className="expertise__item-title">{t('training services')}</h2>
        <p className="expertise__item-text">
          {t('training services description')}
        </p>
      </li>
    </ul>
  </section>
  )
}