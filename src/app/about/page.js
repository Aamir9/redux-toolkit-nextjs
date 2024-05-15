// pages/index.js

'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../globalRedux/slices/counterSlice';

export default function About() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment())} style={{ margin: '5px' }}>Increment</button>
        <button onClick={() => dispatch(decrement())} style={{ margin: '5px' }}>Decrement</button>
        <button onClick={() => dispatch(reset())} style={{ margin: '5px' }}>Reset</button>
      </div>
    </div>
  );
}
