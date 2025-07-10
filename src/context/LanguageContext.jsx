// "use client";

// import React, { createContext, useContext, useEffect, useState } from 'react';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [locale, setLocale] = useState('en');
//   const [messages, setMessages] = useState({});

//   useEffect(() => {
//     const storedLocale = localStorage.getItem('locale') || 'en';
//     loadLocale(storedLocale);
//   }, []);

//   const loadLocale = async (lng) => {
//     const messages = await import(`../locales/${lng}.json`);
//     setMessages(messages.default);
//     setLocale(lng);
//     localStorage.setItem('locale', lng);
//   };

//   const t = (key) => messages[key] || key;

//   return (
//     <LanguageContext.Provider value={{ locale, setLocale: loadLocale, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => useContext(LanguageContext);

"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('ru');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');

    if (storedLocale) {
      loadLocale(storedLocale);
    } else {
      loadLocale('ru');
    }
  }, []);

  const loadLocale = async (lng) => {
    try {
      const messages = await import(`../locales/${lng}.json`);
      setMessages(messages.default);
      setLocale(lng);
      localStorage.setItem('locale', lng);
    } catch (error) {
      console.error(`Ошибка при загрузке перевода для ${lng}`, error);
    }
  };

  const t = (key) => messages[key] || key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale: loadLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

