"use client";

import '../styles/main.scss';
import { useLanguage } from '../context/LanguageContext';

export default function Mission() {
  const { t } = useLanguage();
  
  return (
    <section className="mission">
    <h1 className="mission__title">{t('mission title')}</h1>
    <p
      className="mission__text"
      dangerouslySetInnerHTML={{ __html: t('mission text 1') }}
    />
    <p
      className="mission__text"
      dangerouslySetInnerHTML={{ __html: t('mission text 2') }}
    />
  </section>
  )
}