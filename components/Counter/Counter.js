import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {incrementValue, decrementValue, resetValue} from '../../redux/action/counterActions'
const Counter = () => { 

  const myState = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Counter With Redux</h1>
        <br />
        <div style={{
            display:'flex',
            alignItems:'center'
        }}>
            <button onClick={()=> dispatch(decrementValue())}>-</button>
            <h1 style={{margin:'0 20px'}}>{myState}</h1>
            <button onClick={()=> dispatch(incrementValue())}>+</button>
            <br />
            <button onClick={()=> dispatch(resetValue())}>RESET</button>
        </div>
     
    </div>
  )
}

export default Counter;