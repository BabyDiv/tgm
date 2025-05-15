
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import '../styles/_nav.scss';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../sections/LanguageSwitcher';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleDropdown = (key) => {
    setActiveDropdown(prev => (prev === key ? null : key));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
   

  return (
    <>
      <button className={`burger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </button>

      <nav className={`nav ${menuOpen ? 'active' : ''}`} ref={navRef}>
        <ul className="nav__list">
        <li className="nav__item">
          <LanguageSwitcher />
        </li>

          <li className="nav__item">
            <Link href="/" className="nav__link">{t('home')}</Link>
          </li>

          <li className={`nav__item nav__item--dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
            {/* <span className="nav__link" onClick={() => handleDropdown('services')}>Our Services</span> */}
            <Link href="/about" className="nav__link">{t('our services')}</Link>
            <ul className={`nav__dropdown ${activeDropdown === 'services' ? 'show' : ''}`}>
              <li><Link href="/service1" className="nav__dropdown-link">{t('application engineering')}</Link></li>
              <li><Link href="/service2" className="nav__dropdown-link">{t('design and engineering')}</Link></li>
              <li><Link href="/service3" className="nav__dropdown-link">{t('project management')}</Link></li>
            </ul>
          </li>

          <li className={`nav__item nav__item--dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
            <Link href="/about" className="nav__link">{t('about')}</Link>
            <ul className={`nav__dropdown ${activeDropdown === 'about' ? 'show' : ''}`}>
              <li>
                <Link href="/about/vision" className="nav__dropdown-link">{t('mission and vision')}</Link>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <Link href="/contact" className="nav__link">{t('contact us')}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
