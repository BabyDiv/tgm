import { useLanguage } from '../context/LanguageContext';

const options = [
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
];

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


// export default function LanguageSwitcher() {
//   const { locale, setLocale } = useLanguage();

//   return (
//     <div className="language-switcher">
//       <Select
//         options={options}
//         defaultValue={options.find(o => o.value === locale)}
//         onChange={(selected) => setLocale(selected.value)}
//         classNamePrefix="lang"
//         // menuPlacement="top"
//       />
//     </div>
//   );
// }