import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state 
  // and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({ smurfs: res.data });
    })
    .catch(err => console.log(err));
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

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <Link exact to="/"> Home of Smurf </Link>
          </li>
          <li>
            <NavLink to="/smurfs" activeClassName="activeNavButton">
              <button>Click to See Smurfs!</button>
            </NavLink>
          </li>
        </ul>

        <Route path="/" render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}/>
        <Route path="/smurfs" render={props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />



      </div>
    );
  }
}

// render() {
//   return (
//     <div className="App">
//       <SmurfForm addSmurf={this.addSmurf}/>
//       <Smurfs smurfs={this.state.smurfs} />
//     </div>
//   );
// }
// }
// need Navlink and Link and Route
// check reame, / , smurfform????? 
// inside surf form add a button and link and have it s
// have a button say return to smurf list
// have a navlink do the same.
// build a nav on top of my routes and iplement my nav link in there.
// Tuesday sandbox has NavLink. 


// <nav> here import and use NavLink </nav>


export default App;
