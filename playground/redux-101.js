import { createStore } from 'redux';

const store = createStore((state = {count:0},action)=>{
switch (action.type){
    case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count:state.count + incrementBy
        };
    case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return{
            count:state.count - decrementBy
        };
    case 'SET':
        return {
            count:action.count
        }
    case 'RESET':
        return{
            count : 0
        };
    default :
        return state;
}
});
//must be function first argument-
//first "state" input - current state, 
//and you can create deafult for first time.
//second argument is tha action get called,
//**dont change the current state, just use it like prevState, 
//not change-only use to co mpute the new state */

// console.log(store.getState());//return the store object

//change data in store -> Actions
//action - object that get send to the store.
//inc,dec,reset

//watch for store changes
store.subscribe(()=>{//get called everytime store changes
    console.log(store.getState());
  });

//unsbscribe at point - like that and call unsubscribe when want to stop
// const unsbscribe = store.subscribe(()=>{
//     console.log(store.getState());
//   });


store.dispatch({//send object to the store- when dispatch, the function in the store runs again.
    type:'INCREMENT',
    incrementBy:5
});

// unsbscribe();//stop subscribing

store.dispatch({
    type:'INCREMENT'
});


store.dispatch({
    type:'DECREMENT',
    decrementBy: 4
});

store.dispatch({
    type:'RESET'
});

//action - must give type .

store.dispatch({
    type:'SET',
    count : 101
});



//