import React, { PureComponent } from 'react';

class FilterItem extends PureComponent {

    onToggle() {
        this.props.setFilter(this.props.filter);
    }

    render(){

        const { filter,reduxFilter } = this.props;
        const active = reduxFilter === filter;

        return (
            <span className="filter-item" onClick={this.onToggle.bind(this)} style={{color: active ? 'red' : '#000'}}>{ filter }</span>
        )
    }
}

export default FilterItem;