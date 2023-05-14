import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/styles.scss';
import App from './App';
import { persistStore } from 'redux-persist';
import { configureStore, history } from './_redux/_store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore();
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Router>
        {/** Connect with state management store */}
        <App history={history} store={store} persistor={persistor} />
    </Router>
  </React.StrictMode>
);


