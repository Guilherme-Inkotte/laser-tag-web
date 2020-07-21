import React from 'react';
import styles from './styles.module.css';

function LeaderboardHead() {
  return (
    <div className={styles.head}>
      <p className={styles.fixedLabel}>Colocação</p>
      <p className={styles.flexLabel}>Nome</p>
      <p className={styles.fixedLabel}>Abates</p>
    </div>
  );
}

export default LeaderboardHead;