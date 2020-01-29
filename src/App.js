import React from "react";
import "./App.scss";
import "./components/Header/Header.scss";
import "./components/Footer/Footer.scss";
import "./components/Odometer/Odometer.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Odometer from "./components/Odometer/Odometer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Odometer />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
