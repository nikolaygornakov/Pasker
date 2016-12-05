import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header clearfix">
                
                <div>
                   {this.props.children}
                </div>
            </div>
        );
    }
}

export default Header;