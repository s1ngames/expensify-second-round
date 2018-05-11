import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    
    constructor(props){
        super(props);

    }

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(()=>({ calendarFocused: calendarFocused }));
    };

    render(){
        return (
            <div>
        <input type="text" value={this.props.filters.text} onChange={(e)=>{
            this.props.dispatch(setTextFilter(e.target.value));
        }} />
        <select value={this.props.filters.sortBy} onChange={(e)=>{
            if(e.target.value === 'date'){
                this.props.dispatch(sortByDate());
            }else if(e.target.value ==='amount'){
                this.props.dispatch(sortByAmount());
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker
            startDate = {this.props.filters.startDate}
            startDateId="your_unique_start_date_id" 
            endDate = {this.props.filters.endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange = {this.onDatesChange}
            focusedInput = {this.state.calendarFocused}
            onFocusChange = {this.onFocusChange}
            showClearDates = {true}
            numberOfMonths = {1}
            isOutsideRange = {() => false}
        />
    </div>
        );
    }
}



const mapStateToProps = (state) => {//props.dispatch imported automaticly
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
