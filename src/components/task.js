import react, {component} from 'react';
import { connect } from 'net';

class Task extends Component {


    render(){
        return(
            <tr>
                <td>
                    {this.props.tasks}
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch){
    r
}

export default connect(() => {}, mapDispatchToProps)(Task)