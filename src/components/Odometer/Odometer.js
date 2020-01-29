import React from "react";

class Odometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      odometer: 0,
      max: 10000
    };
  }

  decrementOne = e => {
    e.preventDefault();
    let odometer = this.state.odometer - 1;
    this.setState({ odometer });
  };

  incrementOne = e => {
    e.preventDefault();
    let odometer = this.state.odometer + 1;
    this.setState({ odometer });
  };

  decrementTens = e => {
    e.preventDefault();
    let odometer = this.state.odometer - 10;
    this.setState({ odometer });
  };

  incrementTens = e => {
    e.preventDefault();
    let odometer = this.state.odometer + 10;
    this.setState({ odometer });
  };

  decrementHundreds = e => {
    e.preventDefault();
    let odometer = this.state.odometer - 100;
    this.setState({ odometer });
  };

  incrementHundreds = e => {
    e.preventDefault();
    let odometer = this.state.odometer + 100;
    this.setState({ odometer });
  };

  decrementThousands = e => {
    e.preventDefault();
    let odometer = this.state.odometer - 1000;
    this.setState({ odometer });
  };

  incrementThousands = e => {
    e.preventDefault();
    let odometer = this.state.odometer + 1000;
    this.setState({ odometer });
  };

  render() {
    let odometer = this.state.odometer;
    let max = this.state.max;
    if (odometer >= max) {
      this.setState({ odometer: 0 });
    }
    return (
      <>
        <h2>ODOMETER: {this.state.odometer}</h2>
        <button onClick={this.decrementOne} class="decrement">
          {" "}
          -{" "}
        </button>
        <span> 1 </span>
        <button onClick={this.incrementOne} class="increment">
          {" "}
          +{" "}
        </button>
        <button onClick={this.decrementTens} class="decrement">
          {" "}
          -{" "}
        </button>
        <span> 10 </span>
        <button onClick={this.incrementTens} class="increment">
          {" "}
          +{" "}
        </button>
        <button onClick={this.decrementHundreds} class="decrement">
          {" "}
          -{" "}
        </button>
        <span> 100 </span>
        <button onClick={this.incrementHundreds} class="increment">
          {" "}
          +{" "}
        </button>
        <button onClick={this.decrementThousands} class="decrement">
          {" "}
          -{" "}
        </button>
        <span> 1000 </span>
        <button onClick={this.incrementThousands} class="increment">
          {" "}
          +{" "}
        </button>
      </>
    );
  }
}

export default Odometer;
