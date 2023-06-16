import React from 'react'
import style from '../style/Navigator.module.css'

export default function Navigator(props) {
  return (
    <div className={style.inline} onClick={props.onClick}>{props.name}</div>
  )
}
