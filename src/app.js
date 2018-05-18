import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { firebase } from './firebase/firebase';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));



//reason to do login or logout here is because its fires when user get in to site, and not inside of startlogin for example that is used only when user click login button
firebase.auth().onAuthStateChanged((user)=>{//called when user change auth state (login to logout and opposit), if there is user , he is "user"var inside function
    if(user){//if there is user, user also hold id
        // console.log('login');
        console.log('uid',user.uid);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{//for .then to work, function inside dispatch (startsetexpenses) must return something that support .then(firebase ref)
        renderApp();
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }
        });
    }else{
        // console.log('log out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
        
    }
});




//before_auth
// const store = configureStore();

// const jsx = (
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>
// );

// ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

// store.dispatch(startSetExpenses()).then(()=>{//for .then to work, function inside dispatch (startsetexpenses) must return something that support .then(firebase ref)
//     ReactDOM.render(jsx,document.getElementById('app'));
// });








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