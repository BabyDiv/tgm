"use client";

import '../../styles/main.scss';
import styles from './TopAbout.module.scss';

export default function TopAbout() {
  return (
    <section className={styles.top}>
      <div className={styles.top__background}>
        <div className={ `${styles.top__background} ${styles.slide11} ${styles.active}` }></div>
      </div>
    </section>
  )
}
