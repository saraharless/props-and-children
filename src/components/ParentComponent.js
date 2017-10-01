import React, { Component } from 'react';
import '../styles/App.css';
import ChildComponent from './ChildComponent.js';
import DisplayComponent from './DisplayComponent.js';

class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      whatToSay: "",
      whatWasSaid: "",

    }
  }
  handleInput(e) {
    e.preventDefault();
    let whatToSay = e.target.value
    this.setState({whatToSay: whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("fired");
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    this.setState({whatToSay: ""});

  }
  render() {
    return (

      <div>
        <div className="form-group">
          <input onChange={this.handleInput} value={this.state.whatToSay} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent whatWasSaid={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}

export default ParentComponent;
