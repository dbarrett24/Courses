/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  //The constructor function is the first function that is called when this class is created.
  constructor(props) {
    //super is a reference to the parent class' constructor function.
    //(The React.Component class inside of react is the parent of THIS class as it is being extended.)
    super(props);

    //this is the ONLY TIME we do direct assignment
    //to this.state! NEVER directly assign things to state.

    //you can define in constructor function
    // this.state = {
    //   lat: null,
    //   errorMessage: "",
    // };
  }

  //you can ALSO define in constructor function
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  //React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
