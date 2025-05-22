"use client";

import '../../styles/main.scss';
import styles from './TopAbout.module.scss';

export default function TopAbout() {
  return (
    <section className={styles.top}>
      <div className={styles.top__background}>
        <div className={ `${styles.top__background} ${styles.slide11} ${styles.active}` }></div>
      </div>

      {/* <button className="top__arrow top__arrow--left">
        <svg viewBox="0 0 24 24" className="arrow-icon">
          <path d="M15 6l-6 6 6 6" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button className="top__arrow top__arrow--right">
        <svg viewBox="0 0 24 24" className="arrow-icon">
          <path d="M9 6l6 6-6 6" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button> */}
    </section>
  )
}
