import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionsProvider";
import Transaction from "../Transaction";
import { Link } from "react-router-dom";

const Transactions = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h6>Transactions</h6>
      {transactions.map((trans) => {
        return <Transaction transaction={trans} key={trans} />;
      })}
      <Link to={`/create`}>
        <button>Create Transaction</button>
      </Link>
    </div>
  );
};

export default Transactions;
