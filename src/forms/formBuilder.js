import React from 'react';
import { Textbox } from './textbox';
import { Radio } from './radio';
import { Select } from './select';

export class FormBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.formValues = {};
    }
    
    formBuilder() {
        this.elements = [];
        for (const i in this.props.fields) {
            let element;
            switch (this.props.fields[i].type) {
                case "textbox": {
                    element = <div key={i}>
                        <label htmlFor={this.props.fields[i].name}>
                            <span className={'form-label ' + this.props.fields[i].name}>{this.props.fields[i].label}</span>
                            <Textbox
                                name={this.props.fields[i].name}
                                value={this.props.fields[i].value}
                                required={this.props.fields[i].required}
                                onChange={this.updateChange.bind(this)}
                            />
                        </label>
                    </div>;
                    break;
                }
                case "radioGroup": {
                    let children = [];
                    if (this.props.fields[i].children) {
                        for (const j in this.props.fields[i].children) {
                            const obj = this.props.fields[i].children[j];
                            children.push(
                                <div key={j}>
                                    <label>
                                        <Radio name={this.props.fields[i].name}
                                            value={obj}
                                            required={this.props.fields[i].required}
                                            onClick={this.updateChange.bind(this)}
                                        /> {obj}
                                    </label>
                                </div>
                            )
                        }
                    }
                    element = <div key={i}>
                        <span className={'form-label ' + this.props.fields[i].name}>{this.props.fields[i].label}</span>
                        {children}
                    </div>;
                    break;
                }
                case "select": {
                    element = (
                        <div key={i}>
                            <label htmlFor={this.props.fields[i].name}>
                                <span className={'form-label select-label ' + this.props.fields[i].name}>{this.props.fields[i].label}</span>
                                <Select
                                    name={this.props.fields[i].name}
                                    options={this.props.fields[i].options}
                                    required={this.props.fields.required}
                                    onChange={this.updateChange.bind(this)}
                                />
                            </label>
                        </div>
                    )
                    break;
                }
                case "submitButton": {
                    element = <div key={i}>
                        <input type="submit" value={this.props.fields[i].value} />
                    </div>;
                    break;
                }
                default: {
                    element = "";
                }
            }
            this.elements.push(element);
        }
        return this.elements;
    }

    updateChange({ name, value }) {
        this.formValues[name] = value;
    }

    submit(e) {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.formValues);
        }
    }

    render() {
        return (
            <form className="app-form" onSubmit={this.submit.bind(this)} >
                {this.formBuilder()}
            </form>
        );
    }
};

export { Textbox, Radio };