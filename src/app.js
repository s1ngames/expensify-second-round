import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import './firebase/firebase';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{//for .then to work, function inside dispatch (startsetexpenses) must return something that support .then(firebase ref)
    ReactDOM.render(jsx,document.getElementById('app'));
});










// store.dispatch(addExpense({description : 'Water bill', amount:4500,createdAt:0}));
// store.dispatch(addExpense({description : 'Gas bill', amount:0,createdAt:1000}));
// store.dispatch(addExpense({description : 'Rent', amount:109500,createdAt:0}));
// // store.dispatch(setTextFilter('water'));

// // setTimeout(()=>{
// //     store.dispatch(setTextFilter('bill'));
// // },3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
// console.log(visibleExpenses);