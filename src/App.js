import React from 'react';
import { FormBuilder } from './forms';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: ""
    };
    this.fields = [
      {
        type: 'textbox',
        name: 'firstName',
        label: 'First Name',
        value: '',
        required: false
      },
      {
        type: 'textbox',
        name: 'lastName',
        label: 'Last Name',
        value: '',
        required: false
      },
      {
        type: 'select',
        name: 'favMovie',
        label: 'Choose your favourite movie',
        requied: true,
        options: [
          { value: "", text: "---"},
          { value: "avenger", text: "Avenger the end game"},
          { value: 'gandhi', text: "Great Ghandhi"}
        ]
      },
      {
        type: 'radioGroup',
        name: 'ageGroup',
        label: 'Age group',
        required: false,
        children: ['18+', 'below 18']
      },
      {
        type: "submitButton",
        value: "Submit"
      }
    ];
  }

  submit(values) {
    const data = this.renderObj(values);
    this.setState({
      formData: data
    });
  }

  renderObj = (data) => {
    let output = "";
    output = Object.keys(data).map((obj, i) => {
      return (
        <div key={i}>
          <span className="space"></span>{obj} : {data[obj]}
        </div>
      )
    })
    return <div>&#123;{output}&#125;</div>
  }

  render() {
    return (
      <div className="App">
        <h2>Form builder example:</h2>
        <FormBuilder onSubmit={this.submit.bind(this)} fields={this.fields} />
        {this.state.formData ? <div>Form values: {this.state.formData}</div> : ''}
      </div>
    );
  }
}

export default App;
