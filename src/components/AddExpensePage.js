import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';


const AddExpensePage = (props) => (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense)=> {
            props.dispatch(startAddExpense(expense));
            props.history.push('/');
        }}      
      />
    </div>
);

export default connect()(AddExpensePage);//calling like this to get the dispatch option for the store.
//connecting to store also can change pages, via props.history
//you can find all availble props in react plugin inside chrome at the component (this one is AddExpensePage)