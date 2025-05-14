"use client";

import '../styles/main.scss';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {

	const { t } = useLanguage();

  return (
    <footer className="footer">
		<div className="footer__container">
			
			<div className="footer__block footer__block--address">
		    <h3 className="footer__title">{t('footer address title')}</h3>
				<p className="footer__text">
					IFZA Properties, Premises No: 29273-001, DSO-IFZA,<br />
					Dubai Digital Park, Dubai Silicon Oasis, Dubai<br />
					390114, Dubai
				</p>
			</div>
	
			<div className="footer__block footer__block--company">
				<h3 className="footer__title"><strong>KVINT</strong></h3>
				<p className="footer__text">
          E-mail: 
          <a href="mailto:info@KVINT.ae" className="footer__link">
            info@kvint.ae
            </a>
          </p>
				<p className="footer__text">
          Tel: 
          <a href="tel:+971503751785" className="footer__link">
            +971 50 375 1785
          </a>
        </p>
			</div>
	
			<div className="footer__block footer__block--copyright">
				<p className="footer__text">© 2025 by KVINT</p>
			</div>
	
		</div>		
	</footer>
  )
}