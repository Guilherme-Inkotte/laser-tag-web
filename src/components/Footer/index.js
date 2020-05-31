import React from 'react';
import styles from './styles.module.css';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <div className={styles.leftSide}>
          <div className={styles.listSection}>
            <p className={styles.listLabel}>Membros</p>
            <ul className={styles.list}>
              <li>Arthur Teixeira</li>
              <li>Guilherme Inkotte</li>
              <li>Isabela Milena</li>
              <li>Lucas Timoteo</li>
              <li>Luíza Klein</li>
              <li>Matheus Maicá</li>
            </ul>
          </div>
          <div className={styles.listSection}>
            <p className={styles.listLabel}>Recursos</p>
            <ul className={styles.list}>
              <li><a target="blank" href="https://github.com/Guilherme-Inkotte/laser-tag">Github.com/laser-tag</a></li>
              <li><a target="blank" href="https://github.com/Guilherme-Inkotte/laser-tag-web">Github.com/laser-tag-web</a></li>
              <li><a target="blank" href="https://github.com/Guilherme-Inkotte/laser-tag-api">Github.com/laser-tag-api</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.rightSide}>
          <h3>LOGO</h3>
          <p>&copy;Lasertag</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;