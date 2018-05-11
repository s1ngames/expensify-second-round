import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

class ExpenseListItem extends React.Component {
    constructor(props){
        super(props);
       
        if (numeral.locales['user-locale'] === undefined) {
            numeral.register('locale', 'user-locale', {
                delimiters: {
                    thousands: ',',
                    decimal: '.'
                },
                abbreviations: {
                    thousand: 'k',
                    million: 'm',
                    billion: 'b',
                    trillion: 't'
                },
                ordinal : function (number) {
                    return number === 1 ? 'er' : 'ème';
                },
                currency: {
                    symbol: '₪'
                }
            });
            numeral.locale('user-locale');
          };
        
        
    }

    render(){
        return(
            <div>
        <Link to={`/edit/${this.props.expense.id}`}>
            <h3>{this.props.expense.description}</h3>
        </Link>
        <p>
        {numeral(this.props.expense.amount / 100).format('0,0.00$')}
         - 
        {moment(this.props.expense.createdAt).format('DD/MM/YYYY')}
         
        </p>
    </div>
        );
    }
}


// const mapStateToProps = (state) => {
//     return{
//         expenses : state.expenses
//     };
// };


export default connect()(ExpenseListItem); //use connect without maptostate to get state.dispatch