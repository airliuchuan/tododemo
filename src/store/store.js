import { createStore, applyMiddleware, compose } from 'redux';
import Perf from 'react-addons-perf';
import reducer from '../reducers/index';

const win = window;
win.Perf = Perf;

const middlewares = [];

if(process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : f => f
)

export default createStore(reducer, {}, storeEnhancers);