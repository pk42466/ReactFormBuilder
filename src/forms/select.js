// https://www.w3schools.com/html/html_form_elements.asp

import React from 'react';

export class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options || [],
            value: ''
        }
        this.generateOptions()
    }
    generateOptions() {
        this.options = [];
        for (const i in this.state.options) {
            this.options.push(
                <option
                    key={i}
                    value={this.state.options[i].value}
                    selected={this.state.options[i].selected}
                >{this.state.options[i].text}</option>
            )
        }
    }
    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        });
        if (this.props.onChange) {
            this.props.onChange({
                name: this.props.name,
                value: e.target.value
            })
        }
    }

    render() {
        return (
            <select
                name={this.props.name}
                required={this.props.required}
                onChange={this.handleChange.bind(this)}
            >
                {this.options}
            </select>
        )
    }
}