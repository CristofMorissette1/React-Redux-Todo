import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteTask} from '../actions/'

class Task extends Component {


    render(){
        return(
            <tr>
                <td>
                    {this.props.tasks}
                </td>
                <td>
                    <button onClick={() => {this.props.deleteTask(this.props.id)}}>Delete</button>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask}, dispatch)
}

export default connect(() =>{return {}}, mapDispatchToProps)(Task)