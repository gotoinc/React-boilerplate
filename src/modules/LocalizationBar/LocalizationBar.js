import React from 'react';
import styles from './LocalizationBar.module.scss';
import { useLocale } from '../../hooks';

const renderActiveLocaleDescription = activeLocale => {
  const state = new Map();
  state.set('en', 'English');
  state.set('ru', 'Русский');
  return state.get(activeLocale) || '';
};

const localeList = [
  {
    locale: 'en',
    description: 'English',
    id: 1,
  },
  {
    locale: 'ru',
    description: 'Русский',
    id: 2,
  },
];

const LocalizationBar = () => {
  const [locale, setLocale] = useLocale();
  return (
    <div className={styles.dropdown}>
      <span>{renderActiveLocaleDescription(locale)}</span>
      <div className={styles.dropdownContent}>
        {localeList.map(item => (
          <span
            key={item.id}
            tabIndex={0}
            role="button"
            className={styles.dropdownContentItem}
            onKeyPress={() => setLocale(item.locale)}
            onClick={() => setLocale(item.locale)}
          >
            {item.description}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LocalizationBar;
