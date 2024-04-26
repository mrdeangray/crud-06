import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionsProvider";

const DeleteTransaction = () => {
  const { transaction } = useParams();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const { transactions, setTransactions } = useContext(TransactionContext);

  const handleDelete = () => {
    const newTransactions = transactions.filter((elem) => elem !== transaction);
    setTransactions(newTransactions);
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      navigate(`/`);
    }, 2000);
  };

  return (
    <div>
      <h5>DeleteTransaction: {transaction}</h5>
      <button onClick={handleDelete}>Delete {transaction}</button>
      {isDeleting && <p>Deleting...</p>}
    </div>
  );
};

export default DeleteTransaction;
