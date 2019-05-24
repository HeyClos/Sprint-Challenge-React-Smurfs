import React, { Component } from 'react';
import axios from 'axios';

// Not sure if i should be using 3333 or 3000 in .post
// Do i really need componentDidMount in App.js?
// What is res.data? will using this cause issues?
// Will using re.data cause me to have to change 
// input change and other stuff?
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = (event, smurf) => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then (res => {
        this.setState ({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err);
    });
  }

  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api

  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
