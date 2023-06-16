import React from 'react'
import ListItem from './ListItem'
import style from '../style/LeagueList.module.css'

export default function LeagueList(props) {
    let selectedLeague = props.selectedLeague;
    if (!selectedLeague) {
        return (
          <div>Noch keine Liga ausgwewählt</div>
        )
    }
    return (
    <table className={style.table}>
      <tr>
        <th>Position</th>
        <th>Name</th>
        <th>Matches</th>
        <th>Points</th>
        <th>Scored goals</th>
        <th>Conceded goals</th>
      </tr>
      {selectedLeague.standings.map(item => {
        return <ListItem obj={item}></ListItem>
    })}</table>
  )
}
