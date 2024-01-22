import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

const store=configureStore({
    reducer:{counter:counterSlice.reducer, auth:authSlice.reducer},
});

export default store;

// import { createStore } from 'redux';
// const counterReducer=(state={counter:0,visibility:true},action)=>{
//     if(action.type==='INCREMENT'){
//         return{
//             ...state,
//             counter:state.counter+1,
//         }
//     }
//     if(action.type==='DECREMENT'){
//         return{
//             ...state,
//             counter:state.counter-1,
//         }
//     }
//     if(action.type==='INCREASE'){
//         return{
//             ...state,
//             counter:state.counter+action.value,
//         }
//     }
//     if(action.type==='TOGGLE'){
//         return{
//             ...state,
//             visibility:!state.visibility,
//         }
//     }
//     return state;
// }

// const store=createStore(counterSlice.reducer);

// const counterSubsricber=()=>{
//     const latestState=store.getState();
//     console.log(latestState);
// };

// store.subscribe(counterSubsricber);

// store.dispatch({type:'INCREMENT'});

// store.dispatch({type:'DECREMENT'});
