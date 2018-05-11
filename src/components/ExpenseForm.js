import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

// const date = new Date(); - complicated. moment better
const now = moment();
console.log(now.format('MMM Do, YYYY'));


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);//constructor and props used to get the props from the parent component
        
        this.state={
            description: props.expense ? props.expense.description :'',
            note: props.expense ? props.expense.note :'',
            amount:props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused :false,
            error:''
        };
    }
    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=>({description:description}));
    };
    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState(()=>({note:note}));
    };
    onAmountChange = (e) =>{
        const amount = e.target.value;
        //regular expression to force only numbers and 2 decimal after point
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount:amount}));
        }
    };   
    onDateChange = (createdAt) =>{//createdat supplied automatic
        if(createdAt){
            this.setState(()=>({ createdAt:createdAt }));
        }
    };
    onFocusChange = ({ focused }) =>{
        this.setState(()=>({ calendarFocused:focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({ error:'Please enter description and amount' }));
        }else{
            this.setState(()=>({ error:'' }));//function onsubmit defined in parent component, and here you execute it , with the state data passed to the parent, what the function does- lives in the parent component when you set up the function.
            this.props.onSubmit({ //parent component pass this function via props, and data returns to parent.
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

//class uses for component state
//use local class state to keep track of the fields, and if edit/adding expense
//only when we subimt form , the data will transfered to redux