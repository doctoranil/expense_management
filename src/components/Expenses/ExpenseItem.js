import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';
import { useState } from 'react';

const ExpenseItem=(props)=> {
const [title,setTitle]= useState(props.title)

const clickHandler=()=>{
    setTitle('updated')
}

    return (
        <li>
        <Cards className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    
     </div>

         </Cards>
         </li>
    );
     
  }
  
  export default ExpenseItem;
  