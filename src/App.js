import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateTransaction from "./components/CreateTransaction";
import TransactionsProvider from "./context/TransactionsProvider";
import UpdateTransaction from "./components/UpdateTransaction";
import DeleteTransaction from "./components/DeleteTransaction";
import Transactions from "./components/ReadTransactions";

function App() {
  return (
    <div className="App">
      <TransactionsProvider>
        <Routes>
          <Route exact path="/" element={<Transactions />} />
          <Route exact path="/create" element={<CreateTransaction />} />
          <Route
            exact
            path="/update/:transaction"
            element={<UpdateTransaction />}
          />
          <Route
            exact
            path="/delete/:transaction"
            element={<DeleteTransaction />}
          />
        </Routes>
      </TransactionsProvider>
    </div>
  );
}

export default App;
