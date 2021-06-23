import React , { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Cards from '../UI/Cards';
import ExpensesChart from './ExpensesChart';


const Expenses=(props)=>{
  const [filterdyear,setFilterdYear]=useState('2021');
const filterChangeHandler= (selectedYear)=>{
setFilterdYear(selectedYear)
};


const filterdExpenses= props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filterdyear;
});

    return (
        <div>
     
        
        <Cards className="expenses">
        <ExpensesFilter selected={filterdyear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList  items={filterdExpenses}/>
        </Cards>
         </div>
    );

}

export default Expenses;