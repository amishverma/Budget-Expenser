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


  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        {/* {props.items.map((expense)=><ExpenseItem  title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}></ExpenseItem> )} */}

        {filteredExpenses.map((expense)=><ExpenseItem  title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}></ExpenseItem> )}
      </Card>
    </div>
  );
}

export default Expenses;
