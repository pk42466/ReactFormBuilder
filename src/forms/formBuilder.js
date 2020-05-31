import React from 'react';
import { Textbox } from './textbox';
import { Radio } from './radio';
import { Select } from './select';

export class FormBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.formValues = {};
        this.fields = this.props.fields;
        this.formBuilder();
    }

    formBuilder() {
        this.elements = [];
        for (const i in this.fields) {
            let element;
            switch (this.fields[i].type) {
                case "textbox": {
                    element = <div key={i}>
                        <label htmlFor={this.fields[i].name}>
                            <span className={'form-label ' + this.fields[i].name}>{this.fields[i].label}</span>
                            <Textbox
                                name={this.fields[i].name}
                                value={this.fields[i].value}
                                required={this.fields[i].required}
                                onChange={this.updateChange.bind(this)}
                            />
                        </label>
                    </div>;
                    break;
                }
                case "radioGroup": {
                    let children = [];
                    if (this.fields[i].children) {
                        for (const j in this.fields[i].children) {
                            const obj = this.fields[i].children[j];
                            children.push(
                                <div key={j}>
                                    <label>
                                        <Radio name={this.fields[i].name}
                                            value={obj}
                                            required={this.fields[i].required}
                                            onClick={this.updateChange.bind(this)}
                                        /> {obj}
                                    </label>
                                </div>
                            )
                        }
                    }
                    element = <div key={i}>
                        <span className={'form-label ' + this.fields[i].name}>{this.fields[i].label}</span>
                        {children}
                    </div>;
                    break;
                }
                case "select": {
                    element = (
                        <div key={i}>
                            <label htmlFor={this.fields[i].name}>
                                <span className={'form-label select-label ' + this.fields[i].name}>{this.fields[i].label}</span>
                                <Select
                                    name={this.fields[i].name}
                                    options={this.fields[i].options}
                                    required={this.fields.required}
                                    onChange={this.updateChange.bind(this)}
                                />
                            </label>
                        </div>
                    )
                    break;
                }
                case "submitButton": {
                                element = <div key={i}>
                                    <input type="submit" value={this.fields[i].value} />
                                </div>;
                    break;
                }
                default: {
                                element = "";
                }
            }
            this.elements.push(element);
        }
    }

    updateChange({ name, value}) {
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
                                {this.elements}
                            </form>
        );
    }
};

export { Textbox, Radio};