import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Navbar from "./components/navbar"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Navbar />, document.getElementById('root'));
registerServiceWorker();
