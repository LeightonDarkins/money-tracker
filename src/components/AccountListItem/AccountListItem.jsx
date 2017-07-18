import React from 'react'

import styles from './AccountListItem.css'

const AccountListItem = (props) => {
  const nameClass = 'col-md-2 name-section'
  const balanceClass = 'col-md-3'

  return (
    <li className='list-group-item'>
      <div className='row'>
        <span className={ nameClass }>{ props.name }</span>
        <span className={ balanceClass }>${ props.balance }</span>
      </div>
    </li>
  )
}

export default AccountListItem
