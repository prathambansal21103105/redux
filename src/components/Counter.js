import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>{return{counter:state.counter.counter,visibility:state.counter.visibility}});

  const incrementHandler=()=>{
    // dispatch({type:'INCREMENT'});
    dispatch(counterActions.increment());
  };

  const increaseHandler=()=>{
    // dispatch({type:'INCREASE',value:5});
    dispatch(counterActions.increase(10));
  }

  const decrementHandler=()=>{
    // dispatch({type:'DECREMENT'});
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({type:'TOGGLE'});
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {data.visibility && <div className={classes.value}>{data.counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
