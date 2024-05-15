// store.js'use client';
'use client';
import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import counterSlice from './slices/counterSlice';

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });
export const store = configureStore({
  reducer: {
      counter: counterSlice
  }
})

export default store;
