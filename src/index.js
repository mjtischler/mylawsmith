import {StyleRoot} from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.body.style.margin = '0';
document.body.style.padding = '0';

const appStyle = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    margin: 0,
    padding: 0
};

ReactDOM.render(
    // MT: To ensure media queries and pseduo classes are respected by the Radium library, we need to wrap our components with <StyleRoot> and attach the style object to that wrapper.
    <StyleRoot style={appStyle}>
        <App/>
    </StyleRoot>,
    document.getElementById('root')
);
