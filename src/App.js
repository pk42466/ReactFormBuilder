import React from 'react';
import { FormBuilder } from './forms';
import './App.css';
// import * as formData from './form.json';
import HttpClient from './httpClient'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: [],
      fields: []
    };
    this.http = new HttpClient();
  }
  componentDidMount() {
    // this.getFormData();
    this.http.fetch({
      url: `/form.json`,
      method: "GET"
    }).then(data => {
      console.log(data);
      this.setState({
        fields: [...data]
      });
    }).catch(error => {
      console.log(error);
    }) 
  }
  // async getFormData() {
  //   const data = await this.http.fetch({
  //     url: `/form.json`,
  //     method: "GET"
  //   });
  //   this.setState({
  //     fields: data
  //   });
  //   // console.log(this.state.fields)
  //   console.log("State is set");
  // }
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
        <FormBuilder onSubmit={this.submit.bind(this)} fields={this.state.fields} />
        {this.state.formData ? <div>Form values: {this.state.formData}</div> : ''}
      </div>
    );
  }
}

export default App;
