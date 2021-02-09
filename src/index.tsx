import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sass/index.scss'
import App from './App';
//bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/jquery/dist/jquery.slim.min";

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
