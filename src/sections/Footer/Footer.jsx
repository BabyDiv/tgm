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
					TOO «ЦелинГидромашЭкспорт» <br />
          Казахстан, г. Астана, район Сарыарка<br />
					улица Бейбітшілік, здание 14, офис 1507<br />
					почтовый индекс 010000
					</p>
				</div>

				<div className={`${styles.footer__block} ${styles['footer__block--company']}`}>
					<h3 className={styles.footer__title}><strong>TGM Export</strong></h3>
					<p className={styles.footer__text}>
						E-mail:
						<a href="mailto:info@cgmexport.kz" className={styles.footer__link}>
						  info@cgmexport.kz
						</a>
					</p>
					<p className={styles.footer__text}>
						Tel:
						<a href="tel:+77785552387" className={styles.footer__link}>
						  +7 778 555 23 87
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
