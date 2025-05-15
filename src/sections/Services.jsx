'use client';

import Image from 'next/image';

import '../styles/main.scss';
import designIcon from '../assets/design.svg';
import managementIcon from '../assets/management.svg';
import engineeringIcon from '../assets/engineering.svg';

import { useLanguage } from '../context/LanguageContext';

export default function Services() {

  const { t } = useLanguage();
  
  return (
    <section className="services">
      <div className="services__container">
        <div className="services__list">

          {/* Card 1 */}
          <article className="services__card card">
            <div className="card__img-1">
              <Image src={designIcon} alt="Design" width={86} height={84} />
            </div>
            <h3 className="card__title">{t('design card title')}</h3>
            <p className="card__text" dangerouslySetInnerHTML={{ __html: t('design card paragraph1') }} />
            <p className="card__text">{t('design card paragraph2')}</p>
            <p className="card__text">{t('design card paragraph3')}</p>
            <div className="card__footer">
              <a href="#" className="card__button button">{t('info button')}</a>
            </div>
          </article>

          {/* Card 2 */}
          <article className="services__card card">
            <div className="card__img-2">
              <Image src={managementIcon} alt="Management" width={86} height={84} />
            </div>
            <h3 className="card__title">{t('management card title')}</h3>
            <p
              className="card__text"
              dangerouslySetInnerHTML={{ __html: t('management card paragraph1') }}
            />
            <p
              className="card__text"
              dangerouslySetInnerHTML={{ __html: t('management card paragraph2') }}
            />
            <p
              className="card__text"
              dangerouslySetInnerHTML={{ __html: t('management card paragraph3') }}
            />
            <div className="card__footer">
              <a href="#" className="card__button button">
                {t('info button')}
              </a>
            </div>
          </article>

          {/* Card 3 */}
          <article className="services__card card">
            <div className="card__img-3">
              <Image src={engineeringIcon} alt="Engineering" width={86} height={84} />
            </div>
              <h3 className="card__title">{t('application card title')}</h3>
              <p
                className="card__text"
                dangerouslySetInnerHTML={{ __html: t('application card paragraph1') }}
              />
              <p className="card__text">{t('application card paragraph2')}</p>
              <p className="card__text">{t('application card paragraph3')}</p>
              <div className="card__footer">
                <a href="#" className="card__button button">
                  {t('info button')}
                </a>
              </div>
          </article>

        </div>
      </div>
    </section>
  );
}
