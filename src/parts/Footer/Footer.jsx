// Footer.jsx
import React from 'react';
import BrandIcon from '../../parts/BrandIcon/BrandIcon';
import Button from '../../elements/Button';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <div className={`${styles.container} flex-col mx-auto`}>
      <div className="flex flex-col sm:flex-row mt-8 justify-center">
        <div className={styles.brandIconContainer}>
          <BrandIcon className={styles.brandIcon} />
          <p className={styles.brandText}>
            Министерство образования
            <br />
            и науки КР
          </p>
        </div>
        <div className={styles.contactInfo}>
          <h1 className={styles.sectionTitle}>Связаться</h1>
          <p className={styles.infoText}>aibekov4432@gmail.com</p>
          <p className={styles.infoText}>Кыргызстан, Бишкек</p>
        </div>
        <div className={styles.socialMedia}>
          <h1 className={styles.socialMediaTitle}>Соц.сети</h1>
          <Button
            href="https://www.instagram.com"
            type="link"
            target="_blank"
            className={styles.socialMediaLink}
            isExternal
          >
            Instagram
          </Button>
        </div>
      </div>
      <div className="flex-col text-center mt-7">
        <p className={styles.footerText}>Бишкек 2023 - Все права защищены - МОН</p>
        <div className="flex-row">
          <p className={`${styles.footerText} inline-block`}>Made by&nbsp;</p>
          <Button
            href="https://github.com/Eldar4432"
            type="link"
            target="_blank"
            className={styles.madeByLink}
            isExternal
          >
            Eldar Aibekov
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
