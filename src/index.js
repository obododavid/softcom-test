import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './globalStyles';

const Root = (
    <>
        <GlobalStyles />
        <App />
    </>
)

ReactDOM.render(Root, document.getElementById('root'))