import uuid from 'uuid';
import database from '../firebase/firebase';


//ADD_EXPENSE
export const addExpense = (expense) =>({
    type:'ADD_EXPENSE',
    expense: expense
});

export const startAddExpense = (expenseData = {}) =>{//redux middleware (thunk), will use this to update firebase and then dispatch the action, dispatch var supplied by redux automaticly
    return (dispatch) => {
        const { //setting default as usual , just different way
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref('expenses').push(expense).then((ref)=>{//ref given automaticly with the then.
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};


//REMOVE_EXPENSE
export const removeExpense = (id) =>({
    type:'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id} = {}) => {
    return ((dispatch)=>{
        database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense(id));
        });
    });
};


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id,updates) =>{
    return (dispatch) => {
        database.ref(`expenses/${id}`).update({
            ...updates
        }).then(()=>{
            dispatch(editExpense(id,updates));
        });
    };
};




//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses: expenses
});

export const startSetExpenses = () => {
    return (dispatch)=>{
        return database.ref('expenses').
        once('value').then((snapshot)=>{
            const expenses = [];
            snapshot.forEach((childSnapshot)=>{//key is the id, which is the snapshot component name, its not part of the object, and parse the rest of array with ...snapshot.val
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
        dispatch(setExpenses(expenses));
        });
        
    };
};

// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{//key is the id, which is the snapshot component name, its not part of the object, and parse the rest of array with ...snapshot.val
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });
