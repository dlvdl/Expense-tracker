import React, { useContext } from 'react'
import '../App.css'
import { GlobalContext } from '../context/GlobalState'
import computeAmount from '../utility/computeAmount'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amount = computeAmount(transactions)

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
