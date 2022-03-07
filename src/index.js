import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {Router} from "react-router";
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import Routes from './routes'
import './config/firebase';
import {createBrowserHistory} from 'history';
import reportWebVitals from './reportWebVitals';
import './index.css';


export const history = createBrowserHistory();

const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <React.StrictMode>
            <Provider store={store}>
                <Router history={history}>
                    <Routes/>
                </Router>
            </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
