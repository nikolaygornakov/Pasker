import React, {Component} from 'react';

import $ from 'jquery';
import observer from '../../models/observer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Notifications.css';

export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state ={
            message: '',
            style: 'info',
            visible: false
        };
        this.bindEventHandlers();

        // Register current notification
        observer.showInfo = this.showInfo.bind(this);
        observer.showSuccess = this.showSuccess.bind(this);
        observer.showError = this.showError.bind(this);
    }

    bindEventHandlers() {
        this.ajaxStart = this.ajaxStart.bind(this);
        this.hide = this.hide.bind(this);
        this.handleAjaxError = this.handleAjaxError.bind(this);
    }

    componentDidMount() {
        // Attach global AJAX "loading" event handlers
        $(document).on({
            ajaxStart: this.ajaxStart,
            ajaxStop: this.hide
        });

        // Attach a global AJAX error handler
        $(document).ajaxError(this.handleAjaxError);
    }

    ajaxStart() {
        this.setState({ message: 'Loading...', style: 'info', visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }

    showInfo(message) {
        this.setState({ message: message, style: 'info', visible: true });
        setTimeout(this.hide, 3000);
    }

    showSuccess(message) {
        this.setState({ message: message, style: 'success', visible: true });
        setTimeout(this.hide, 3000);
    }

    showError(errorMsg) {
        this.setState({ message: errorMsg, style: 'error', visible: true });
    }

    render() {
        if (!this.state.visible) return null;

        let className = 'notification';
        switch (this.state.style) {
            case 'info':
                className = 'alert alert-info';
                break;
            case 'error':
                className = 'alert alert-danger';
                break;
            case 'success':
                className = 'alert alert-success';
                break;
            default:
                className = 'alert alert-info';
                break;
        }

        return (
            <div className={className} onClick={this.hide}>
                <span>
                    {this.state.message}
                </span>
            </div>
        )
    }
}
