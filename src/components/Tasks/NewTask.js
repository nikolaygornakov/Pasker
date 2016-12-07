import React, { Component } from 'react';

class NewTask extends Component {
    render() {
     
        return (
            
            <form className="form-inline" onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                      <input
                        type="text"
                        name="newtask"
                        placeholder="New Task"
                        value={this.props.newtask}
                        onChange={this.props.onChangeHandler}
                        className="form-control"
                        required="required"
                    />
                </div>
                 <div className="form-group">
                      <input
                        type="Date"
                        name="newdate"
                        placeholder="Date"
                        value={this.props.newdate}
                        onChange={this.props.onChangeHandler}
                        className="form-control"
                        required="required"
                    />
                </div>
                 <div className="form-group">
                      <input
                        type="text"
                        name="newlocation"
                        placeholder="Location"
                        value={this.props.newlocation}
                        onChange={this.props.onChangeHandler}
                        className="form-control"
                        required="required"
                    />
                </div>

                <input
                    type="submit"
                    name="btnLogin"
                    value="Create"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}
                    onSubmit={this.props.onSubmitHandler}
                />
            </form>
            
        );
    }
}

export default NewTask;