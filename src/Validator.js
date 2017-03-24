import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super()
    this.state = {
      validation: "Passwords do not match",
      pass1: "",
      pass2: ""
    }
  }
  handleChange(e) {
    this.setState({
      pass1: e.target.value
    })
  }
  handleChange2(e) {
    this.setState({
      pass2: e.target.value
    })
  }
  match (e) {
    if (this.state.pass1 === this.state.pass2){
      this.setState({
        validation: "Valid!"
      })
    }
  }
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <input type="password" placeholder="confirm password" value={this.state.value} onChange={(e) => this.handleChange2(e)} />
        <input type="submit" value="Submit" onClick={(e) => this.match(e)}/>
        <p>{this.state.validation}</p>
      </div>
    );
  }
}

export default Validator;
