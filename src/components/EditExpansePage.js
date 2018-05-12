import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm';

const EditExpansePage = (props) => {
    return(
        <div>
            <ExpenseForm
             expense={props.expense}
             onSubmit={(expense)=>{
                props.dispatch(startEditExpense(props.expense.id,expense));
                props.history.push('/');
             }}
            />
            <button onClick={()=>{
                props.dispatch(startRemoveExpense({id:props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {//second argument is the props that editexpansepage get
   return {
       expense: state.expenses.find((expense)=>{
           return expense.id === props.match.params.id ;
       })
   }; 
};

export default connect(mapStateToProps)(EditExpansePage);

//props.match.params.id - takes the end of the address bar(after the / sign). id variable took his name from the appRouter where you have /edit:id