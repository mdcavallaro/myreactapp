import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let model = {clicks: 0};

function render() {
    ReactDOM.render(<App
        clicks = {model.clicks}/>, document.getElementById('root'));
}
var onClick = () => model.clicks += 1
render();
