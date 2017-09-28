import React, { PureComponent } from 'react';
import './index.less';

class AddTodo extends PureComponent {

    onSubmit(e) {
        e.preventDefault();
        const input = this.input;
        const text = input.value;
        if(text.trim() === '') {
            return;
        }
        this.props.addTodo(text);
        input.value = '';
    }

    refInput(node) {
        this.input = node;
    }

    render(){
        return (
            <div className="add-wrap">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <button type="submit">提交</button>
                    <div className="input">
                        <input type="text" ref={this.refInput.bind(this)}/>
                    </div>

                </form>
            </div>
        )
    }
}

export default AddTodo;