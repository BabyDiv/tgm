"use client";

import '../styles/main.scss';
import { useLanguage } from '../context/LanguageContext';

export default function Conclusion() {

  const { t } = useLanguage();

  return (
    <section className="conclusion">
      <p
        className="conclusion__text"
        dangerouslySetInnerHTML={{ __html: t('conclusion text') }}
      />
  </section>
  )
}