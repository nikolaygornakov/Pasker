import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Project Manager</h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Header;