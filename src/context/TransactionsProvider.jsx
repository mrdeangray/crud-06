import React, { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext(null);

const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(["aaa", "bbb"]);

  useEffect(() => {
    setTransactions(
      JSON.parse(localStorage.getItem("crud-06-transactions")) || ["aaa", "bbb"]
    );
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionsProvider;
