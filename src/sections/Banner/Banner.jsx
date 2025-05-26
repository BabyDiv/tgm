"use client";

import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.scss';
import slide1 from '../../assets/slide-1-desktop.webp';
import slide2 from '../../assets/slide-2-desktop.webp';
import slide3 from '../../assets/slide-3-desktop.webp';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const slides = [slide1, slide2, slide3];


  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);

    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <section className={styles.banner}>
      <div className={styles.banner__background}>
        {slides.map((image, index) => (
          <div
            key={index}
            className={`${styles.banner__slide} ${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        ))}
      </div>

      <button className={`${styles.banner__arrow} ${styles.left}`} onClick={prevSlide}>
        <svg viewBox="0 0 24 24" className="arrow-icon">
          <path d="M15 6l-6 6 6 6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className={`${styles.banner__arrow} ${styles.right}`} onClick={nextSlide}>
        <svg viewBox="0 0 24 24" className="arrow-icon">
          <path d="M9 6l6 6-6 6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
