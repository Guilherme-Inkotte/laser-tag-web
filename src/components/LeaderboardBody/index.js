import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import api from '../../api';
import LeaderboardHead from '../LeaderboardHead';

function LeaderboardBody() {

  const [players, setPlayers] = useState([])
  const [totalPages, setTotalPages] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const getLeaderboard = async () => {
    try {
      const res = await api.get(`/players/leaderboard?page=${currentPage}`)
      console.log(res.data)
      setPlayers(res.data.players)
      setTotalPages(Math.ceil(res.data.playersCount/10))
    } catch(err) {
      console.log(err)
    }
    // {
    //   skip: 10 * (currentPage - 1),
    //   limit: 10
    // }).then(res => {
    //   setPlayers(res.data.players);
    //   setTotalPages(Math.ceil(res.data.playersCount/10));
    // }).catch(err => {
    //   console.log(err);
    // })
  }

  const changePage = to => {
    setCurrentPage(to);
  }

  useEffect(() => {
    getLeaderboard();
  }, [currentPage])

  return (
    <>
    {/* <p className={styles.title}>Sua pontuação</p>
    <div className={styles.container}>
      <LeaderboardHead />
      <div className={styles.yourPosition}>
        <div className={styles.tableRow}>
          <p className={styles.fixedLabel}>1</p>
          <p className={styles.flexLabel}>Guize</p>
          <p className={styles.fixedLabel}>66666</p>
        </div>
      </div>
    </div> */}
    <p className={styles.title}>Placar geral</p>
    <div className={styles.container}>
      <LeaderboardHead />
      <div className={styles.globalLeaderboard}>
        {
          players.map((player, index) => {
            return <div className={styles.tableRow}>
              <p className={styles.fixedLabel}>{1 + index + (10 * (currentPage - 1))}</p>
              <p className={styles.flexLabel}>{player.name}</p>
              <p className={styles.fixedLabel}>{player.kills}</p>
            </div>
          })
        }
      </div>
      <div className={styles.pageNavigation}>
        <button onClick={() => changePage(1)}>&#171;</button>
        {currentPage - 1 > 0 
          && <button onClick={() => changePage(currentPage - 1)}>{currentPage - 1}</button>
        }
        <p className={styles.selectedPageButton}>{currentPage}</p>
        {currentPage + 1 <= totalPages 
          && <button onClick={() => changePage(currentPage + 1)}>{currentPage + 1}</button>
        }
        <button onClick={() => changePage(totalPages)}>&#187;</button>
      </div>
    </div>
    </>
  );
}

export default LeaderboardBody;