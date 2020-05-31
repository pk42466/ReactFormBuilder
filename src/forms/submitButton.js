import React from 'react';

export class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || "",
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.props.submit) {
            this.props.submit();
        }
    };


    render() {
        return <input type="submit" value={this.props.value} onClick={this.handleSubmit.bind(this)} />
    }
}