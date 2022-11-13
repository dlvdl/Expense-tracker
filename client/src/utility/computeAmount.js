const computeAmount = (transactions) => {
  return transactions.map((transaction) => transaction.amount)
}

export default computeAmount
