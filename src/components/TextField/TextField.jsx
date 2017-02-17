import React from 'react'
import styles from './TextField.css'

const TextField = (props) => {
  return (
    <input className={ styles.default } type='text' placeholder={ props.placeholder }></input>
  )
}

export default TextField
