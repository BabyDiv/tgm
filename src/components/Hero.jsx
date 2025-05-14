"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import '../styles/main.scss';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Hero() {
  const contentRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.add('visible');
      }
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   if (open === true) {
  //     setOpen(false);
  //   } else if (open === false) {
  //     setOpen(true);
  //   }
  // }

  return (
    <section className="hero">
    <div className="hero__background"></div>
  
    <div className="hero__content container" ref={contentRef}>
      <p className="hero__paragraph">
      {t('hero')}
      </p>
      <div className="hero__button-wrapper">
        <a href="#" className="button hero__button">
        {t('contact us')}
        </a>
      </div>
      {/* <button onClick={handleClick}>Menu</button>

      {
        open === true ? (
          <h1>Header</h1>
        ) : null
      } */}

    </div>
  </section>
  )
}