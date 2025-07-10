// "use client";

// import '../../styles/main.scss';
// import { useLanguage } from '../../context/LanguageContext';
// import { useEffect, useRef, useState } from 'react';
// import styles from './Contact.module.scss';
// import 'intl-tel-input/build/css/intlTelInput.css';
// import emailjs from 'emailjs-com';

// export default function Contact() {
//   const { t } = useLanguage();
//   const phoneInputRef = useRef(null);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       (async () => {
//         const intlTelInput = (await import("intl-tel-input")).default;
//         if (phoneInputRef.current) {
//           intlTelInput(phoneInputRef.current, {
//             initialCountry: "auto",
//             geoIpLookup: callback => {
//               fetch("https://ipinfo.io/json?token=<your_token>")
//                 .then(res => res.json())
//                 .then(data => callback(data.country))
//                 .catch(() => callback("us"));
//             },
//             utilsScript:
//               "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js",
//           });
//         }
//       })();
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const newErrors = {};

//     if (!form.firstName.value.trim()) {
//       newErrors.firstName = t("contact first name error") || "Введите имя";
//     }
//     if (!form.lastName.value.trim()) {
//       newErrors.lastName = t("contact last name error") || "Введите фамилию";
//     }
//     if (!form.email.value.trim()) {
//       newErrors.email = t("contact email error") || "Введите email";
//     } else if (!/\S+@\S+\.\S+/.test(form.email.value)) {
//       newErrors.email = t("contact email error") || "Некорректный email";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       const formData = {
//         firstName: form.firstName.value,
//         lastName: form.lastName.value,
//         email: form.email.value,
//         phone: form.phone.value,
//         message: form.message.value,
//       };

//       try {
//         const res = await fetch("/api/contact", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         const data = await res.json();

//         if (data.success) {
//           setSubmitted(true);
//           form.reset();
//         } else {
//           alert("Ошибка при отправке: " + data.message);
//         }
//       } catch (error) {
//         console.error(error);
//         alert("Ошибка сети. Попробуйте позже.");
//       }
//     }
//   };

//   return (
//     <section className={styles.contact}>
//       <div className={styles.contact__info}>
//         <h1 className={styles.contact__title}>{t("contact title")}</h1>
//         <p className={styles.contact__text}>{t("contact text")}</p>
//       </div>

//       {submitted ? (
//         <p className={styles.successMessage}>{t("contact form message")}</p>
//       ) : (
//         <form noValidate onSubmit={handleSubmit} className={styles.contact__form}>
//           <label>
//             <span>{t("contact first name")}</span>
//             <input type="text" name="firstName" placeholder={t("contact first name placeholder")} />
//             {errors.firstName && <small className={styles.error}>{errors.firstName}</small>}
//           </label>

//           <label>
//             <span>{t("contact last name")}</span>
//             <input type="text" name="lastName" placeholder={t("contact last name placeholder")} />
//             {errors.lastName && <small className={styles.error}>{errors.lastName}</small>}
//           </label>

//           <label>
//             <span>{t("contact email")}</span>
//             <input type="email" name="email" placeholder={t("contact email placeholder")} />
//             {errors.email && <small className={styles.error}>{errors.email}</small>}
//           </label>

//           <label>
//             <span>{t("contact phone")}</span>
//             <input type="tel" id="phone" name="phone" ref={phoneInputRef} placeholder={t("contact phone placeholder")} />
//           </label>

//           <label>
//             <span>{t("contact message")}</span>
//             <textarea name="message" rows="4" placeholder={t("contact message placeholder")} />
//           </label>

//           <input type="text" name="_gotcha" style={{ display: "none" }} />

//           <button type="submit" className="contact__button">
//             {t("contact button")}
//           </button>
//         </form>
//       )}
//     </section>
//   );
// }

// "use client";

// import '../../styles/main.scss';
// import { useLanguage } from '../../context/LanguageContext';
// import { useEffect, useRef, useState } from 'react';
// import styles from './Contact.module.scss';
// import 'intl-tel-input/build/css/intlTelInput.css';

// export default function Contact() {
//   const { t } = useLanguage();
//   const phoneInputRef = useRef(null);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     let itiInstance;

//     if (typeof window !== "undefined" && phoneInputRef.current) {
//       setTimeout(async () => {
//         const intlTelInput = (await import("intl-tel-input")).default;

//         if (
//           phoneInputRef.current &&
//           !phoneInputRef.current.classList.contains("iti")
//         ) {
//           itiInstance = intlTelInput(phoneInputRef.current, {
//             initialCountry: "auto",
//             geoIpLookup: callback => {
//               fetch("https://ipinfo.io/json?token=<your_token>")
//                 .then(res => res.json())
//                 .then(data => callback(data.country))
//                 .catch(() => callback("us"));
//             },
//             utilsScript:
//               "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js",
//           });
//         }
//       }, 100);
//     }

//     return () => {
//       if (itiInstance) {
//         itiInstance.destroy();
//       }
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const newErrors = {};

//     if (!form.firstName.value.trim()) {
//       newErrors.firstName = t("contact first name error") || "Введите имя";
//     }
//     if (!form.lastName.value.trim()) {
//       newErrors.lastName = t("contact last name error") || "Введите фамилию";
//     }
//     if (!form.email.value.trim()) {
//       newErrors.email = t("contact email error") || "Введите email";
//     } else if (!/\S+@\S+\.\S+/.test(form.email.value)) {
//       newErrors.email = t("contact email error") || "Некорректный email";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       const formData = new FormData(form);

//       try {
//         const res = await fetch("https://formspree.io/f/mnndkegr", {
//           method: "POST",
//           body: formData,
//           headers: {
//             Accept: "application/json",
//           },
//         });

//         if (res.ok) {
//           setSubmitted(true);
//           form.reset();
//         } else {
//           alert("Ошибка при отправке. Попробуйте позже.");
//         }
//       } catch (error) {
//         console.error(error);
//         alert("Ошибка сети.");
//       }
//     }
//   };

//   return (
//     <section className={styles.contact}>
//       <div className={styles.contact__info}>
//         <h1 className={styles.contact__title}>{t("contact title")}</h1>
//         <p className={styles.contact__text}>{t("contact text")}</p>
//       </div>

//       {submitted ? (
//         <p className={styles.successMessage}>{t("contact form message")}</p>
//       ) : (
//         <form noValidate onSubmit={handleSubmit} className={styles.contact__form}>
//           <label>
//             <span>{t("contact first name")}</span>
//             <input type="text" name="firstName" placeholder={t("contact first name placeholder")} />
//             {errors.firstName && <small className={styles.error}>{errors.firstName}</small>}
//           </label>

//           <label>
//             <span>{t("contact last name")}</span>
//             <input type="text" name="lastName" placeholder={t("contact last name placeholder")} />
//             {errors.lastName && <small className={styles.error}>{errors.lastName}</small>}
//           </label>

//           <label>
//             <span>{t("contact email")}</span>
//             <input type="email" name="email" placeholder={t("contact email placeholder")} />
//             {errors.email && <small className={styles.error}>{errors.email}</small>}
//           </label>

//           <label>
//             <span>{t("contact phone")}</span>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               ref={phoneInputRef}
//               placeholder={t("contact phone placeholder")}
//               autoComplete="off"
//               style={{ width: "100%" }}
//             />
//           </label>

//           <label>
//             <span>{t("contact message")}</span>
//             <textarea name="message" rows="4" placeholder={t("contact message placeholder")} />
//           </label>

//           <input type="text" name="_gotcha" style={{ display: "none" }} />

//           <button type="submit" className="contact__button">
//             {t("contact button")}
//           </button>
//         </form>
//       )}
//     </section>
//   );
// }

// "use client";

// import '../../styles/main.scss';
// import { useLanguage } from '../../context/LanguageContext';
// import { useEffect, useRef, useState } from 'react';
// import styles from './Contact.module.scss';
// import 'intl-tel-input/build/css/intlTelInput.css';
// import emailjs from 'emailjs-com';

// export default function Contact() {
//   const { t } = useLanguage();
//   const phoneInputRef = useRef(null);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       (async () => {
//         const intlTelInput = (await import("intl-tel-input")).default;
//         if (phoneInputRef.current) {
//           intlTelInput(phoneInputRef.current, {
//             initialCountry: "auto",
//             geoIpLookup: callback => {
//               fetch("https://ipinfo.io/json?token=<your_token>")
//                 .then(res => res.json())
//                 .then(data => callback(data.country))
//                 .catch(() => callback("us"));
//             },
//             utilsScript:
//               "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js",
//           });
//         }
//       })();
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const newErrors = {};

//     if (!form.firstName.value.trim()) {
//       newErrors.firstName = t("contact first name error") || "Введите имя";
//     }
//     if (!form.lastName.value.trim()) {
//       newErrors.lastName = t("contact last name error") || "Введите фамилию";
//     }
//     if (!form.email.value.trim()) {
//       newErrors.email = t("contact email error") || "Введите email";
//     } else if (!/\S+@\S+\.\S+/.test(form.email.value)) {
//       newErrors.email = t("contact email error") || "Некорректный email";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {

//       try {
//         const result = await emailjs.sendForm(
//           'service_mmym9fc',
//           'template_u7j8yrl',
//           form,
//           'mttWt6M0AfHuIXAOl'
//         );
      
//         if (result.status === 200) {
//           setSubmitted(true);
//           form.reset();
//         } else {
//           alert("Ошибка при отправке: " + result.text);
//         }
//       } catch (error) {
//         console.error(error);
//         alert("Ошибка сети. Попробуйте позже.");
//       }
//     }
//   };

//   return (
//     <section className={styles.contact}>
//       <div className={styles.contact__info}>
//         <h1 className={styles.contact__title}>{t("contact title")}</h1>
//         <p className={styles.contact__text}>{t("contact text")}</p>
//       </div>

//       {submitted ? (
//         <p className={styles.successMessage}>{t("contact form message")}</p>
//       ) : (
//         <form noValidate onSubmit={handleSubmit} className={styles.contact__form}>
//           <label>
//             <span>{t("contact first name")}</span>
//             <input type="text" name="firstName" placeholder={t("contact first name placeholder")} />
//             {errors.firstName && <small className={styles.error}>{errors.firstName}</small>}
//           </label>

//           <label>
//             <span>{t("contact last name")}</span>
//             <input type="text" name="lastName" placeholder={t("contact last name placeholder")} />
//             {errors.lastName && <small className={styles.error}>{errors.lastName}</small>}
//           </label>

//           <label>
//             <span>{t("contact email")}</span>
//             <input type="email" name="email" placeholder={t("contact email placeholder")} />
//             {errors.email && <small className={styles.error}>{errors.email}</small>}
//           </label>

//           <label>
//             <span>{t("contact phone")}</span>
//             <input type="tel" id="phone" name="phone" ref={phoneInputRef} placeholder={t("contact phone placeholder")} />
//           </label>

//           <label>
//             <span>{t("contact message")}</span>
//             <textarea name="message" rows="4" placeholder={t("contact message placeholder")} />
//           </label>

//           <input type="text" name="_gotcha" style={{ display: "none" }} />

//           <button type="submit" className="contact__button">
//             {t("contact button")}
//           </button>
//         </form>
//       )}
//     </section>
//   );
// }

"use client";

import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.scss';
import 'intl-tel-input/build/css/intlTelInput.css';
import emailjs from 'emailjs-com';

export default function Contact() {
  const { t } = useLanguage();
  const phoneInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const intlTelInput = (await import("intl-tel-input")).default;
        if (phoneInputRef.current) {
          intlTelInput(phoneInputRef.current, {
            initialCountry: "auto",
            geoIpLookup: callback => {
              fetch("https://ipinfo.io/json?token=<your_token>")
                .then(res => res.json())
                .then(data => callback(data.country))
                .catch(() => callback("us"));
            },
            utilsScript:
              "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js",
          });
        }
      })();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.target;
    const newErrors = {};

    if (!form.firstName.value.trim()) {
      newErrors.firstName = t("contact first name error") || "Введите имя";
    }
    if (!form.lastName.value.trim()) {
      newErrors.lastName = t("contact last name error") || "Введите фамилию";
    }
    if (!form.email.value.trim()) {
      newErrors.email = t("contact email error") || "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(form.email.value)) {
      newErrors.email = t("contact email error") || "Некорректный email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const result = await emailjs.sendForm(
          'service_mmym9fc',
          'template_u7j8yrl',
          form,
          'mttWt6M0AfHuIXAOl'
        );

        if (result.status === 200) {
          setSubmitted(true);
          form.reset();
        } else {
          alert("Ошибка при отправке: " + result.text);
        }
      } catch (error) {
        console.error(error);
        alert("Ошибка сети. Попробуйте позже.");
      }
    }

    setIsSending(false);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contact__info}>
        <h1 className={styles.contact__title}>{t("contact title")}</h1>
        <p className={styles.contact__text}>{t("contact text")}</p>
      </div>

      {submitted ? (
        <span className={styles.successMessage}>{t("contact form message")}</span>
      ) : (
        <form noValidate onSubmit={handleSubmit} className={styles.contact__form}>
          <label>
            <span>{t("contact first name")}</span>
            <input type="text" name="firstName" placeholder={t("contact first name placeholder")} />
            {errors.firstName && <small className={styles.error}>{errors.firstName}</small>}
          </label>

          <label>
            <span>{t("contact last name")}</span>
            <input type="text" name="lastName" placeholder={t("contact last name placeholder")} />
            {errors.lastName && <small className={styles.error}>{errors.lastName}</small>}
          </label>

          <label>
            <span>{t("contact email")}</span>
            <input type="email" name="email" placeholder={t("contact email placeholder")} />
            {errors.email && <small className={styles.error}>{errors.email}</small>}
          </label>

          <label>
            <span>{t("contact phone")}</span>
            <input type="tel" id="phone" name="phone" ref={phoneInputRef} placeholder={t("contact phone placeholder")} />
          </label>

          <label>
            <span>{t("contact message")}</span>
            <textarea name="message" rows="4" placeholder={t("contact message placeholder")} />
          </label>

          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <button type="submit" className="contact__button">
            {t("contact button")}
          </button>

          {isSending && (
            <p className={styles.sendingMessage}>{t("contact sending message")}</p>
          )}
        </form>
      )}
    </section>
  );
}


