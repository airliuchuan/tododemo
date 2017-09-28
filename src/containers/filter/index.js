import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import './index.less';
import * as filterActionsFromFile from '../../actions/filterAction';
import FilterItem from './filterItem';
import { FilterTypes } from '../../constants/filterTypes';


class Filter extends PureComponent {
    render() {
        return (
            <div className="filter-wrap">
                <FilterItem filter={FilterTypes.ALL}  reduxFilter={this.props.filter} setFilter={this.props.filterActions.setFilter}/>
                <FilterItem filter={FilterTypes.COMPLETED} reduxFilter={this.props.filter} setFilter={this.props.filterActions.setFilter}/>
                <FilterItem filter={FilterTypes.UNCOMPLETED} reduxFilter={this.props.filter} setFilter={this.props.filterActions.setFilter}/>
            </div>
        )
    }
}

//===============redux===========
function mapStateToProps(state) {
    return {
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(filterActionsFromFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);