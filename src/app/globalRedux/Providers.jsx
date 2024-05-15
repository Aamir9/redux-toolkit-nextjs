// pages/_app.js
'use client';

import { Provider } from 'react-redux';
import store from './store';
// import '../styles/globals.css';

function Providers({ children} ) {
  return (
    <Provider store={store}>
    {children}
    </Provider>
  );
}

export default Providers;
