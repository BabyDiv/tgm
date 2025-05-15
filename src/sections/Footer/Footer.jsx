"use client";

import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.scss';

export default function Footer() {
	const { t } = useLanguage();

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				
				<div className={`${styles.footer__block} ${styles['footer__block--address']}`}>
					<h3 className={styles.footer__title}>{t('footer address title')}</h3>
					<p className={styles.footer__text}>
						IFZA Properties, Premises No: 29273-001, DSO-IFZA,<br />
						Dubai Digital Park, Dubai Silicon Oasis, Dubai<br />
						390114, Dubai
					</p>
				</div>

				<div className={`${styles.footer__block} ${styles['footer__block--company']}`}>
					<h3 className={styles.footer__title}><strong>KVINT</strong></h3>
					<p className={styles.footer__text}>
						E-mail: 
						<a href="mailto:info@KVINT.ae" className={styles.footer__link}>
							info@kvint.ae
						</a>
					</p>
					<p className={styles.footer__text}>
						Tel: 
						<a href="tel:+971503751785" className={styles.footer__link}>
							+971 50 375 1785
						</a>
					</p>
				</div>

				<div className={`${styles.footer__block} ${styles['footer__block--copyright']}`}>
					<p className={styles.footer__text}>© 2025 by KVINT</p>
				</div>

			</div>		
		</footer>
	)
}
