import React from 'react'

export default function ListItem(props) {
  return (
    <tr>
         <td>{props.obj.pos}</td>
         <td>{props.obj.name}</td>
         <td>{props.obj.matches}</td>
         <td>{props.obj.points}</td>
         <td>{props.obj.scored_goals}</td>
         <td>{props.obj.conceded_goals}</td>
    </tr>
   
  )
}
