import React, {Component} from 'react';

export default class TaskControls extends Component {
    render() {
        if (sessionStorage.getItem('userId') === this.props.author) {
            return (
                <input type="submit" value="Delete" onClick={this.props.onDelete.bind(this, this.props.taskId)} className="btn btn-default"/>
            )
        }
        return (
            <input type="submit" disabled="disabled" value="Delete" onClick={this.props.onDelete.bind(this, this.props.taskId)} className="btn btn-default"/>
        )
    }
}