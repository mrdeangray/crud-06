import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionsProvider";

const CreateTransaction = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransactions = [...transactions, inputValue];
    setTransactions(newTransactions);
    localStorage.setItem(
      "crud-06-transactions",
      JSON.stringify(newTransactions)
    );
    setInputValue("");
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>CreateTransaction</h6>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
      <p>{transactions.join(`,`)}</p>
    </div>
  );
};

export default CreateTransaction;
