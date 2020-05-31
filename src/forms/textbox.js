import React from 'react';

export class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
            value: this.props.value || "",
            required: this.props.required || false,
            name: this.props.name
        }
    }


    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        if (this.props.onChange) {
            this.props.onChange({ name: this.state.name, value: this.state.value });
        }
    };


    handleBlur(e) {
        this.setState({
            value: e.target.value
        });
        if (this.props.onBlur) {
            this.props.onBlur({ name: this.state.name, value: this.state.value });
        }
        if (this.props.onChange) {
            this.props.onChange({ name: this.state.name, value: this.state.value });
        }
    }


    render() {
        return <input
            type="text"
            value={this.state.value}
            required={this.state.required}
            name={this.state.name}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
        />
    }
}