import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import api from '../../api';

function LeaderboardBody() {

  const [players, setPlayers] = useState([])
  const [totalPages, setTotalPages] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const changePage = to => {
    setCurrentPage(to);
  }

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const res = await api.get(`/players/leaderboard?page=${currentPage}`)
        console.log(res.data)
        setPlayers(res.data.players)
        setTotalPages(Math.ceil(res.data.playersCount / 10))
      } catch (err) {
        console.log(err)
      }
    }

    getLeaderboard();
  }, [currentPage])

  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <td>Colocação</td>
            <td>Nome</td>
            <td>Abates</td>
          </thead>
          <tbody>
            {
              players.map((player, index) => (
                <tr className={styles.playerCell}>
                  <td>{1 + index + (10 * (currentPage - 1))}</td>
                  <td className={styles.nameCell}>{player.name}</td>
                  <td>{player.kills}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

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