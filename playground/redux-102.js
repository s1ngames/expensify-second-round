console.log('redux-101 refactored-arranged');

//action generators-better than manual- function return action object
const incrementCount = ({ incrementBy = 1 } = {})=>({
    type:'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {})=>({
    type:'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = ()=>({
    type:'RESET'
});

const setCount = ({ count })=>({
    type:'SET',
    count: count
});



import { createStore } from 'redux';

//reducers
//reducers are pure function - output only determined by input
// // unpure
// let a= 10;
// const add =(b)=>{
//     return a+b;
// };

///**pure == not envolving global vars */
//2. never change state or action
const countReducer = (state = {count:0},action)=>{
    switch (action.type){
        case 'INCREMENT':
            return {
                count:state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count:state.count - action.decrementBy
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
    };
    };

const store = createStore(countReducer);

store.subscribe(()=>{//get called everytime store changes
    console.log(store.getState());
  });


store.dispatch(incrementCount({incrementBy: 5 }));
store.dispatch(decrementCount({decrementBy :3 }));
store.dispatch(resetCount());
store.dispatch(setCount({count:10}));




//