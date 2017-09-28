import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionsFromFile from '../../actions/todoActions';
import TodoList from './todoList';
import AddTodo from './addTodo';
import { FilterTypes } from '../../constants/filterTypes';

class Todo extends PureComponent {

    render() {
        return (
            <div>
                <ul className="todolist-wrap">
                    {
                        this.props.todos.map((item, index) => {
                            return <TodoList
                                        key={item.id}
                                        id={item.id}
                                        text={item.text}
                                        completed={item.completed}
                                        onToggle={this.props.todoActions.toggleTodo}
                                        onRemove={this.props.todoActions.removeTodo}
                                    />
                        })
                    }

                </ul>
                <AddTodo addTodo={this.props.todoActions.addTodo}/>
            </div>
        )
    }
}

//==============================================redux=================================================

const selectVisibleTodos = (todo, filter) => {
    switch(filter) {
        case FilterTypes.ALL:
            return todo;
        case FilterTypes.COMPLETED:
            return todo.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todo.filter(item => !item.completed);
        default:
            throw new Error('不支持的过滤类型');

    }
}

function mapStateToProps(state) {
    return {
        todos: selectVisibleTodos(state.todo, state.filter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(todoActionsFromFile, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);