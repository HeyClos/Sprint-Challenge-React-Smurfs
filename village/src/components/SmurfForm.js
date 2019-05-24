import React, { Component } from 'react';

// Not sure if i should be using 3333 or 3000 in .post
// Do i really need componentDidMount in App.js?
// What is res.data? will using this cause issues?
// Will using re.data cause me to have to change 
// input change and other stuff?
// Why were there empty string properties in the initial addSmurf?
// Why didnt yesterday's addFriend examples have empty strings?

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name:'',
        age: '',
        height: ''
      }
    };
  }

  // addSmurf = (event, smurf) => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api
  //   axios
  //     .post('http://localhost:3333/smurfs', smurf)
  //     .then (res => {
  //       this.setState ({
  //         smurfs: res.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //   });
  // }


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
    this.props.addSmurf(e, this.state.smurf);
    this.setState ({
      smurf: {
        name:'',
        age: '',
        height: ''
      }
    });
  };
  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };


  //adding this method because its how i did it yesterday.
  changeHandler = ev => {
    ev.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [ev.target.name]: ev.target.value
      }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        {/* <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          /> */}
        <form onSubmit={this.handleInputChange}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
