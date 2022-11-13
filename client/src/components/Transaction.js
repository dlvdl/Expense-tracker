import React from 'react'

const Transaction = ({ transaction, deleteTransaction }) => {
  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text} <span>{transaction.amount}</span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </button>
    </li>
  )
}

export default Transaction
