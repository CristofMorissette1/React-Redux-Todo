import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions/';


class TaskBar extends Component{


    render(){
        return(
            <div>
                <input type="text" ref="task" placeholder="Add tasks here"/>
                <button onClick={() => this.props.addTask(this.refs.task.value)}>Add Task</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch)
}

export default connect(() =>{return {}},mapDispatchToProps)(TaskBar)