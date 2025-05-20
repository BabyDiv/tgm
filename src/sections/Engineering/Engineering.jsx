"use client";

import Image from 'next/image';
import '../../styles/main.scss';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Engineering.module.scss';

export default function Engineering() {

  const { t } = useLanguage();

  return (
    <section class="engineering">
    <h1 class="engineering__heading">
    {t("application engineering")}
    </h1>
    <p class="engineering__desc">
      {t("engineering desc")}
    </p>
    <h2 class="engineering__tasks">
      {t("engineering tasks")}
    </h2>
    <ol class="engineering__tasks-list">
      <li class="engineering__tasks-item"
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title one')} ${t('engineering text one')}`,
        }}
      >
      </li>
      <li class="engineering__tasks-item"
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title two')} ${t('engineering text two')}`,
        }}
      >
      </li>
      <li class="engineering__tasks-item"
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title three')} ${t('engineering text three')}`,
        }}
      >
      </li>
      <li class="engineering__tasks-item"
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title four')} ${t('engineering text four')}`,
        }}
      >
      </li>
      <li class="engineering__tasks-item"
        dangerouslySetInnerHTML={{
          __html: `${t('engineering title five')} ${t('engineering text five')}`,
        }}
      >
      </li>
    </ol>
    <p class="engineering__summary">
      {t("engineering summary")}
    </p>
    </section>
  )
}