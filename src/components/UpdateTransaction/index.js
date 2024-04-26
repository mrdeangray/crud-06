import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionsProvider";
import { useNavigate } from "react-router-dom";

const UpdateTransaction = () => {
  const { transaction } = useParams();
  const [isUpdating, setIsUpdating] = useState(false);
  const { transactions, setTransactions } = useContext(TransactionContext);
  const [inputValue, setInputValue] = useState(transaction);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransactions = [...transactions];
    const startIndex = newTransactions.indexOf(transaction);
    newTransactions.splice(startIndex, 1, inputValue);
    setTransactions(newTransactions);
    localStorage.setItem(
      "crud-06-transactions",
      JSON.stringify(newTransactions)
    );
    setInputValue("");
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate(`/`);
    }, 2000);

  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>Update: {transactions}</h6>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
      <p>{transactions.join(`,`)}</p>
      {isUpdating && <p>Updating...</p>}
    </div>
  );
};

export default UpdateTransaction;
