"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState({});

  // Загружаем переводы при смене языка
  useEffect(() => {
    const storedLocale = localStorage.getItem('locale') || 'en';
    loadLocale(storedLocale);
  }, []);

  const loadLocale = async (lng) => {
    const messages = await import(`../locales/${lng}.json`);
    setMessages(messages.default);
    setLocale(lng);
    localStorage.setItem('locale', lng);
  };

  const t = (key) => messages[key] || key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale: loadLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
