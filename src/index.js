import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './common.less';
import TodoApp from './containers/';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
