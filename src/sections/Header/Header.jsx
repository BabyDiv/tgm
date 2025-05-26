import Image from 'next/image';
import logo from '../../assets/logo.svg';
import Nav from '../Nav/nav';
import '../../styles/main.scss';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.info}>
      <a href="/" className={styles.logo}>
        <Image src={logo} className={styles.logo__img} alt="Logo" />
      </a>
      <div className={styles.contacts}>
        <div className={styles.contacts__item}>
          <svg className={styles.contacts__icon} data-bbox="20 20 160 159.999" viewBox="0 0 200 200" height="22.4" width="22.4" xmlns="http://www.w3.org/2000/svg" data-type="shape">
            <g>
              <path fill="#4CA89D" d="M174.754 137.015l-16.878-17.024c-7.055-7.116-18.563-7.186-25.705-.156l-.283.278-.803.794c-5.874 5.808-15.363 5.761-21.178-.105L78.719 89.344c-5.798-5.849-5.75-15.271.108-21.061l.001.001.283-.279c7.142-7.03 7.211-18.499.156-25.615L62.404 25.383c-7.061-7.122-18.581-7.185-25.72-.14l-.001-.001-11.238 11.11c-4.496 4.445-6.458 10.916-4.936 17.042 14.422 58.077 66.325 112.081 124.426 126.073 6.239 1.503 12.817-.21 17.377-4.711l12.003-11.848.284-.279c7.14-7.03 7.21-18.498.155-25.614z"></path>
            </g>
          </svg>
          <span className={styles.contacts__text}>
            <a href="tel:+77785552387">
              +7 (778) 555 23 87
            </a>
          </span>
        </div>
        <div className={styles.contacts__item}>
          <svg className={styles.contacts__icon} data-bbox="20 44.5 160 110.999" viewBox="0 0 200 200" height="22.4" width="22.4" xmlns="http://www.w3.org/2000/svg" data-type="shape">
            <g>
              <path fill="#4CA89D" d="M109.336 104.331a17.481 17.481 0 0 1-18.671 0L20.222 59.784H20v78.442c0 9.54 7.784 17.273 17.386 17.273h125.228c9.602 0 17.386-7.733 17.386-17.273V59.784h-.222l-70.442 44.547z"></path>
              <path fill="#4CA89D" d="M22.578 44.5l.215.125 68.173 43.111a16.917 16.917 0 0 0 18.069 0l68.173-43.111.215-.125H22.578z"></path>
            </g>
          </svg>
          <span className={styles.contacts__text}>
            <a href="mailto:info@cgmexport.kz">
            info@cgmexport.kz
            </a>
          </span>
        </div>
      </div>
    </div>
      <Nav />
    </header>
  );
};