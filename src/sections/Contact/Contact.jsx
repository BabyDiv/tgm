"use client";

import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.scss';
import 'intl-tel-input/build/css/intlTelInput.css';

export default function Contact() {
  const { t } = useLanguage();
  const phoneInputRef = useRef(null);

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const newErrors = {};

    if (!form.firstName.value.trim()) {
      newErrors.firstName = t("contact first name error") || "Enter first name";
    }
    if (!form.lastName.value.trim()) {
      newErrors.lastName = t("contact last name error") || "Enter last name";
    }
    if (!form.email.value.trim()) {
      newErrors.email = t("contact email error") || "Enter email";
    } else if (!/\S+@\S+\.\S+/.test(form.email.value)) {
      newErrors.email = t("contact email error") || "Email invalid";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      form.submit();
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contact__info}>
        <h1 className={styles.contact__title}>{t("contact title")}</h1>
        <p className={styles.contact__text}>{t("contact text")}</p>
      </div>

      <form noValidate
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mnndkegr"
        method="POST"
        className={styles.contact__form}>
        <label>
          <span>{t("contact first name")}</span>
          <input
            type="text"
            name="firstName"
            placeholder={t("contact first name placeholder")}
          />
          {errors.firstName && (
            <small className={styles.error}>{errors.firstName}</small>
          )}
        </label>

        <label>
          <span>{t("contact last name")}</span>
          <input
            type="text"
            name="lastName"
            placeholder={t("contact last name placeholder")}
          />
          {errors.lastName && (
            <small className={styles.error}>{errors.lastName}</small>
          )}
        </label>

        <label>
          <span>{t("contact email")}</span>
          <input
            type="email"
            name="email"
            placeholder={t("contact email placeholder")}
          />
          {errors.email && (
            <small className={styles.error}>{errors.email}</small>
          )}
        </label>

        <label>
          <span>{t("contact phone")}</span>
          <input
            type="tel"
            id="phone"
            name="phone"
            ref={phoneInputRef}
            placeholder={t("contact phone placeholder")}
          />
        </label>

        <label>
          <span>{t("contact message")}</span>
          <textarea
            name="message"
            rows="4"
            placeholder={t("contact message placeholder")}
          />
        </label>

        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <button type="submit" className="contact__button">
          {t("contact button")}
        </button>
      </form>
    </section>
  );
}
