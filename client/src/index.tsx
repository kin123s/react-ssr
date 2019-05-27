import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter} from 'react-router-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

const Apps = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <Apps/>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
