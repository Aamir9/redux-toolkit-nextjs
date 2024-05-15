'use client';
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../app/globalRedux/slices/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
