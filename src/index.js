import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';
import registerServiceWorker from './registerServiceWorker';

const render = () => ReactDOM.render(
    <Provider store={store}>
    <App /> 
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
render();
store.subscribe(render);
