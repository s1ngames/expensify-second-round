import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h4>Expense List</h4>
        <ol>
            {props.expenses.map((expense)=>(
                <li key={expense.id}><ExpenseListItem expense={expense}/></li>
            ))}
        </ol>
    </div>
);

const mapStateToProps = (state) => {//send expeneses key to the expenselist as props, using only filtered expenses from selectors/expenses file, passing the current state  all expenses and all filters 
    return{
        expenses : selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);



// const ExpenseList = (props) => (
//     <div>
//         <h1>Expense List</h1>
//         {props.expenses.length}
//     </div>
// );

// const ConnectedExpenseList = connect((state)=>{
//     return{
//         expenses : state.expenses
//     };
// })(ExpenseList);

// //connected expense list is the same component with connection to the redux store
// //connect()()
// //first argument is what we want to connect to read or write to in the store-
// //the whole state passed in automaticly for us to choose.
// //its a function that returns an object with the props we can use in the first not connected component as props
// //i can add also not connected keys to the object like "name:nir" for example, things that not in the store , but will use in the props

// //second argument is the component that we want to connect with the store

// export default ConnectedExpenseList;

//its very common to export default connect method without const name like the connectedexpenseList,
//its also very common to split the first connect argument (the method) to its own function called mapstatetoprops