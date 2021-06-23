import React, { useState } from 'react';
import Expenses from  './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';




const dummy_expences=[
  { 
    id:'e1',
    title:'Car Insurence',
    amount:294.67,
    date:new Date(2021,3,9)
  },
  { 
    id:'e2',
    title:'Toilet Paper',
    amount:294.67,
    date:new Date(2021,2,6)
 },
 { 
    id:'e3',
    title:'Washing Machine',
    amount:294.67,
    date:new Date(2021,1,1)
 },
 {
    id:'e4',
    title:'Shirt',
    amount:294.67,
    date:new Date(2021,2,28)
  },
];


 const App=()=> {
   const[expenses,setExpenses]=useState(dummy_expences);


  const addExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    });

  }



 
  return (
    <div className="App">
      <NewExpense  onAddExpense={addExpenseHandler}/>
     
     <Expenses items={expenses} />
    

     
    </div>
  );
}

export default App;
