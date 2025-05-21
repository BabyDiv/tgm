'use client';

import Image from 'next/image';

import '../../styles/main.scss';

import { useEffect, useRef, useState } from 'react';
import slide1 from '../../assets/design-2-desktop.avif';
import slide2 from '../../assets/design-1-desktop.avif';
import slide3 from '../../assets/about-desktop.avif';
import styles from './TopManagement.module.scss';

export default function TopManagement() {

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
    <section className={styles.top}>
      <div className={styles.top__background}>
        {slides.map((image, index) => (
          <div
            key={index}
            className={`${styles.top__slide} ${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        ))}
      </div>

      <button className={`${styles.top__arrow} ${styles.left}`} onClick={prevSlide}>
        <svg viewBox="0 0 24 24" className="arrow-icon">
          <path d="M15 6l-6 6 6 6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className={`${styles.top__arrow} ${styles.right}`} onClick={nextSlide}>
        <svg viewBox="0 0 24 24" className="arrow-icon">
          <path d="M9 6l6 6-6 6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  )
}