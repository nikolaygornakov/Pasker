import React, { Component } from 'react';

class NewTask extends Component {
    render() {
        return (
            <form className="form-inline" onSubmit={this.props.onSubmit}>
                <div className="form-group">
                      <input
                        type="text"
                        name="task"
                        placeholder="New Task"
                        value={this.props.task}
                        onChange={this.props.onChange}
                        className="form-control"
                        
                    />
                </div>
                 <div className="form-group">
                      <input
                        type="Date"
                        name="date"
                        placeholder="Date"
                        value={this.props.date}
                        onChange={this.props.onChange}
                        className="form-control"
                        
                    />
                </div>
                 <div className="form-group">
                      <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={this.props.location}
                        onChange={this.props.onChange}
                        className="form-control"
                        
                    />
                </div>

                <input
                    type="submit"
                    name="btnLogin"
                    value="Create"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}
                />
            </form>
            
        );
    }
}

export default NewTask;