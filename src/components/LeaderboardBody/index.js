import React, { useState } from 'react';
import styles from './styles.module.css';
import LeaderboardHead from '../LeaderboardHead';

function LeaderboardBody() {
  const [players, setPlayers] = useState([
    {position: 1, name: "Guize", points: 66622},
    {position: 2, name: "Lua", points: 66621},
    {position: 3, name: "Guize", points: 9},
    {position: 4, name: "Guize", points: 8},
    {position: 5, name: "Guize", points: 7},
    {position: 6, name: "Guize", points: 6},
    {position: 7, name: "Guize", points: 5},
    {position: 8, name: "Guize", points: 4},
    {position: 9, name: "Guize", points: 3},
    {position: 10, name: "Feiju ruim", points: 2},
  ])
  return (
    <>
    <p className={styles.title}>Sua pontuação</p>
    <div className={styles.container}>
      <LeaderboardHead />
      <div className={styles.yourPosition}>
        <div className={styles.tableRow}>
          <p className={styles.fixedLabel}>1</p>
          <p className={styles.flexLabel}>Guize</p>
          <p className={styles.fixedLabel}>66666</p>
        </div>
      </div>
    </div>
    <p className={styles.title}>Placar geral</p>
    <div className={styles.container}>
      <LeaderboardHead />
      <div className={styles.globalLeaderboard}>
        {
          players.map(player => {
            return <div className={styles.tableRow}>
              <p className={styles.fixedLabel}>{player.position}</p>
              <p className={styles.flexLabel}>{player.name}</p>
              <p className={styles.fixedLabel}>{player.points}</p>
            </div>
          })
        }
      </div>
      <div className={styles.pageNavigation}>
        <button>&#60;</button>
        <button>1</button>
        <button>99</button>
        <button>&#62;</button>
      </div>
    </div>
    </>
  );
}

export default LeaderboardBody;