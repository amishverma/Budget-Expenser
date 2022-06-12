import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("expense.js");
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        {props.items.map((expense)=><ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem> )}
      </Card>
    </div>
  );
}

export default Expenses;
