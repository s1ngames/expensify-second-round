import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.description}</h3>
        </Link>
        <p>{props.expense.amount} - {props.expense.createdAt}</p>
    </div>
);

// const mapStateToProps = (state) => {
//     return{
//         expenses : state.expenses
//     };
// };


export default connect()(ExpenseListItem); //use connect without maptostate to get state.dispatch