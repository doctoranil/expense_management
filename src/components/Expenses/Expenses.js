import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Cards from '../UI/Cards';
const Expenses=()=>{

    const expences=[
        { 
          id:'e1',
          title:'Car Insurence',
          amount:294.67,
          date:new Date(2021,2,28)
        },
        { 
          id:'e1',
          title:'Toilet Paper',
          amount:294.67,
          date:new Date(2021,2,28)
       },
       { 
          id:'e1',
          title:'Washing Machine',
          amount:294.67,
          date:new Date(2021,2,28)
       },
       {
          id:'e1',
          title:'Shirt',
          amount:294.67,
          date:new Date(2021,2,28)
        }
      ];

    return (
        <Cards className="expenses">
        <ExpenseItem 
          title={expences[0].title} 
          amount={expences[0].amount}
          date={expences[0].date}
          
         />

         <ExpenseItem 
          title={expences[1].title} 
          amount={expences[1].amount}
          date={expences[1].date}
         />
        <ExpenseItem 
          title={expences[2].title} 
          amount={expences[2].amount}
          date={expences[2].date}
        />

  <ExpenseItem 
          title={expences[3].title} 
          amount={expences[3].amount}
          date={expences[3].date}
        />
      
         </Cards>
    );

}

export default Expenses;