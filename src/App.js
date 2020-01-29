import React from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Odometer from "./components/Odometer/Odometer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
