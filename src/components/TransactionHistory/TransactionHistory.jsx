import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions = [] }) => {
  const transactionsEl = transactions.map(transaction => (
    <tr className={styles.transactionsElitem} key={transaction.id}>
      <td className={styles.tdType}>{transaction.type}</td>
      <td className={styles.tdAmount}>{transaction.amount}</td>
      <td className={styles.tdCurrency}>{transaction.currency}</td>
    </tr>
  ));

  return (
    <table className={styles.transactions}>
      <thead className={styles.tHed}>
        <tr>
          <th className={styles.thTitle}>Type</th>
          <th className={styles.thTitle}>Amount</th>
          <th className={styles.thTitle}>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionsEl}</tbody>
    </table>
  );
};

export default TransactionHistory;