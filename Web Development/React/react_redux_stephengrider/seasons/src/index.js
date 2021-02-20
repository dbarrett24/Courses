import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  //The constructor function is the first function that is called when this class is created.
  constructor(props) {
    //super is a reference to the parent class' constructor function.
    super(props);

    //this is the ONLY TIME we do direct assignment
    //to this.state! NEVER directly assign things to state.
    this.state = {
      lat: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(this);
        //you have to call setState to update state.
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //React says we have to define render!!
  render() {
      if(this.state.errorMessage && !this.state.lat){
          return <div>Error: {this.state.errorMessage}</div>
      }
      if(this.state.errorMessage && this.state.lat){
          return <div>Latitude: {this.state.lat}</div>
      }
      return <div>Loading!</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
