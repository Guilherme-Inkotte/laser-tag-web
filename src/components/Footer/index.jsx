import React from 'react';
import styles from './styles.module.css';

import logo from '../../assets/logo_2.png'

function Footer(props) {

  const positionFixed =
    props.fixed ?
      {
        position: "fixed",
        bottom: 0
      } :
      null

  return (
    <footer className={styles.footerWrapper} style={positionFixed}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <small>MEMBROS</small>
          <div className={styles.members}>
            <ul className={styles.memberList}>
              <li>Arthur Teixeira</li>
              <li>Guilherme Inkotte</li>
              <li>Isabella Milena</li>
              <li>Lucas Timoteo</li>
              <li>Luiza Klein</li>
              <li>Matheus Maicá</li>
            </ul>
          </div>
          <small>RECURSOS</small>
          <div className={styles.resources}>
            <ul className={styles.resourceList}>
              <li>
                <a href="https://github.com/30111971/laser-tag-api" target="_blank" rel="noopener noreferrer">github.com/30111971/laser-tag-api</a>
              </li>
              <li>
                <a href="https://github.com/Guilherme-Inkotte/laser-tag-web" target="_blank" rel="noopener noreferrer">github.com/guilherme-inkotte/laser-tag-web</a>
              </li>
              <li>
                <a href="https://github.com/Guilherme-Inkotte/laser-tag" target="_blank" rel="noopener noreferrer">github.com/guilherme-inkotte/laser-tag</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>&copy;Lasertag Tecpuc</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;