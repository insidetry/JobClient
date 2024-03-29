import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import './css/style.css'
import './css/colors/blue.css'
import 'bootstrap/dist/css/bootstrap.min.css';


 import 'jquery/dist/jquery.min.js';
 

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
