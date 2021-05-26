import './ExpenseDate.css';

const ExpenseDate=(props)=> {
 const  month= props.date.toLocaleString('en-us',{month:'long'});
 const  day= props.date.toLocaleString('en-us',{day:'2-digit'});
 const  year= props.date.getFullYear();
    
    return (
      
        <div className="expense-date">
        <div className="expense-date-moonth">{month}</div>
        <div className="expense-date-year">{year}</div>
        <div className="expense-date-day">{day}</div>
       </div>
 
    );
     
  }
  
  export default ExpenseDate;
  