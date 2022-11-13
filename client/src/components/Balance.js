import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import computeAmount from '../utility/computeAmount'
import formatAmount from '../utility/formatAmount'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amount = computeAmount(transactions)
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

  console.log(total)
  return (
    <>
      <h4>Your balance</h4>
      <h1>${formatAmount(total)}</h1>
    </>
  )
}

export default Balance
