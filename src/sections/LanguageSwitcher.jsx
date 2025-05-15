// import { useLanguage } from '../context/LanguageContext';

// export default function LanguageSwitcher() {
//   const { locale, setLocale, t } = useLanguage();

//   const changeLanguage = (lng) => {
//     setLocale(lng);
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('en')} disabled={locale === 'en'}>
//         EN
//       </button>
//       <button onClick={() => changeLanguage('ru')} disabled={locale === 'ru'}>
//         RU
//       </button>
//     </div>
//   );
// }

import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  const changeLanguage = (event) => {
    setLocale(event.target.value);
  };

  return (
    <div className="language-switcher">
      <select value={locale} onChange={changeLanguage}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
}