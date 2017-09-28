import React, { PureComponent } from 'react';
import Todo from '../containers/todo';
import Filter from '../containers/filter';
import './index.less';

class TodoApp extends PureComponent {
    render() {
        return (
            <div className="todos-wrap">
                <Filter/>
                <Todo/>
            </div>
        )
    }
}

export default TodoApp;