// pages/_app.js
'use client';
import store from './globalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,reset } from './globalRedux/slices/counterSlice';

// import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <main >
    <button 
      onClick={() => dispatch(increment())}
    >Increment</button>
    <span>{count}</span>
    <button  onClick={() => dispatch(decrement())} >Decrement</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
  </main>
  );
}

export default MyApp;
