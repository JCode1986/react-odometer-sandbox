import React from "react";

class Odometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      odometer: 0,
      max: 10000
    };
  }

  //increment and decrement by ones
  decrementOne = e => this.setState({ odometer: this.state.odometer - 1 });
  incrementOne = e => this.setState({ odometer: this.state.odometer + 1 });

  //increment and decrement by tens
  decrementTens = e => this.setState({ odometer: this.state.odometer - 10 });
  incrementTens = e => this.setState({ odometer: this.state.odometer + 10 });

  //increment and decrement by hundreds
  decrementHundreds = e =>
    this.setState({ odometer: this.state.odometer - 100 });
  incrementHundreds = e =>
    this.setState({ odometer: this.state.odometer + 100 });

  //increment and decrement by thousands
  decrementThousands = e =>
    this.setState({ odometer: this.state.odometer - 1000 });
  incrementThousands = e =>
    this.setState({ odometer: this.state.odometer + 1000 });

  render() {
    let style = {
      background: "red"
    };
    let odometer = this.state.odometer;
    let max = this.state.max;

    if (odometer >= max) {
      this.setState({ odometer: 0 });
    }

    if (odometer <= -1) {
      this.setState({ odometer: 0 });
    }

    if (odometer > 1000) {
      style.background = "yellow";
    }

    if (odometer > 3000) {
      style.background = "teal";
    }

    if (odometer > 5000) {
      style.background = "green";
    }

    if (odometer > 7000) {
      style.background = "brown";
    }

    return (
      <>
        <h2 id="odometer" style={style}>
          ODOMETER: {this.state.odometer}
        </h2>
        <p>Decrement or Increment</p>
        <ul>
          <li>
            <button onClick={this.decrementOne} class="decrement">
              {" "}
              -{" "}
            </button>
            <span> 1 </span>
            <button onClick={this.incrementOne} class="increment">
              {" "}
              +{" "}
            </button>
          </li>
          <li>
            <button onClick={this.decrementTens} class="decrement">
              {" "}
              -{" "}
            </button>
            <span> 10 </span>
            <button onClick={this.incrementTens} class="increment">
              {" "}
              +{" "}
            </button>
          </li>
          <li>
            <button onClick={this.decrementHundreds} class="decrement">
              {" "}
              -{" "}
            </button>
            <span> 100 </span>
            <button onClick={this.incrementHundreds} class="increment">
              {" "}
              +{" "}
            </button>
          </li>
          <li>
            <button onClick={this.decrementThousands} class="decrement">
              {" "}
              -{" "}
            </button>
            <span> 1000 </span>
            <button onClick={this.incrementThousands} class="increment">
              {" "}
              +{" "}
            </button>
          </li>
        </ul>
      </>
    );
  }
}

export default Odometer;
