
import "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    // console.error("TransactionHistory: отриманий некоректний або порожній масив транзакцій.");
    return null; 
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

