import React from 'react';

export class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
            value: this.props.value
        }
    }


    handleChange(e) {
        this.setState({ value: e.target.value });
        if (this.props.onChange) {
            this.props.onChange({ name: this.props.name, value: e.target.value });
        }
    };


    handleBlur(e) {
        this.setState({ value: e.target.value });
        if (this.props.onBlur) {
            this.props.onBlur({ name: this.props.name, value: e.target.value });
        }
        if (this.props.onChange) {
            this.props.onChange({ name: this.props.name, value: e.target.value });
        }
    }


    render() {
        return <input
            type="text"
            value={this.state.value}
            required={this.props.required}
            name={this.props.name}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
        />
    }
}