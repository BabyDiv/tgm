'use client';

import '../../styles/main.scss';
import styles from './TopVision.module.scss';

export default function TopVision() {

  return (
    <section className={styles.top}>
      <div className={styles.top__background}>
        <div className={` ${styles.top__slide} ${styles.slide2} ${styles.active} `}></div>
      </div>
    </section>
  )
}
