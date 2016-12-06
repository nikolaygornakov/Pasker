import React, {Component} from 'react';
import {logout} from '../../models/user';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.logout();
    }

    logout() {
        if (sessionStorage.getItem('username')) {
            logout(this.onSubmitResponse.bind(this));
        }
    }

    onSubmitResponse(response) {
        if (response === true) {
            this.context.router.push('/');
        } else {
        }
    }

    render() {
        this.context.router.push("/");
        return null
    }
}

Logout.contextTypes = {
    router: React.PropTypes.object
};