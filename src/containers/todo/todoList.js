import React, { PureComponent } from 'react';
import './index.less';

class TodoList extends PureComponent {

    onToggle() {
        this.props.onToggle(this.props.id)
    }

    onRemove() {
        this.props.onRemove(this.props.id)
    }

    render() {

        const { completed, text } = this.props;
        const checkProps = { checked: completed ? true : false }

        return (
            <li
                className="todo-item clearfix"
            >
                <input type="checkbox" {...checkProps} onClick={this.onToggle.bind(this)} readOnly/>
                <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
                <button onClick={this.onRemove.bind(this)}>×</button>
            </li>
        )
    }
}

export default TodoList;