import React, { useState } from 'react';
import './NewExpense.css';
import  ExpenseForm from './ExpenseForm'

const  NewExpense= (props)=>{

const [isEditing,setIsEditing]= useState(false);

const startEditingHandler = () =>{
    setIsEditing(true);
};

const stopEditingHandler =()=>{
    setIsEditing(false);
}


const saveExpenseDataHandler=(enterdExpenseData)=>{
const expenseData={
    ...enterdExpenseData,
    id:Math.random().toString()
};



// console.log(expenseData);
props.onAddExpense(expenseData);
setIsEditing(false);
};


    return <div className="new-expense">
    {!isEditing &&  <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm onSaveExepenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>

};

export default NewExpense;