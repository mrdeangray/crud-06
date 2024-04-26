import React from "react";
import { Link } from "react-router-dom";

const Transaction = ({ transaction }) => {
  return (
    <div>
      <span>{transaction}</span>
      <Link to={`/update/${transaction}`}>
        <span>Update</span>
      </Link>
      <Link to={`/delete/${transaction}`}>
        <span>Delete</span>
      </Link>
    </div>
  );
};

export default Transaction;
