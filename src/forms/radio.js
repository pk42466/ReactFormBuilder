import React from 'react';

export class Radio extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            checked: this.props.checked || false,
        }
    }
    handleClick(e) {
        this.setState({
            checked: e.target.checked
        });
        if (this.props.onClick) {
            this.props.onClick({
                name: this.props.name,
                value: e.target.checked ? this.props.value : null
            })
        }
        if (this.props.onChange) {
            this.props.onChange({
                name: this.props.name,
                value: e.target.checked ? this.props.value : null
            })
        }
    }
    render() {
        return (
            <input
                type='radio'
                checked={this.state.checked}
                name={this.props.name}
                value={this.props.value}
                required={this.props.required}
                onChange={this.handleClick.bind(this)}
                onClick={this.handleClick.bind(this)}
            />
        )
    }
}