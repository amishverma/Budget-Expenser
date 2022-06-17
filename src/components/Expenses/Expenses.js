import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
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
        {/* using ternary operator */}
        {/* {filteredExpenses.length===0 ? <p>No expenses found</p>:filteredExpenses.map((expense)=><ExpenseItem  title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}></ExpenseItem> )}   */}
        {/* {filteredExpenses.length===0 && <p>No expense found</p>}
        {filteredExpenses.length>0 && filteredExpenses.map((expense)=><ExpenseItem  title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}></ExpenseItem> ) } */}
        <ExpensesChart expenses={filteredExpenses}/>
        {<ExpensesList items={filteredExpenses}/>}
      </Card>
    </div>
  );
}

export default Expenses;
