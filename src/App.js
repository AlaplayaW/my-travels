import React, { Component } from "react";
import "./App.css";
import Travel from "./Travel";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel
          destination="ASIA"
          country="Vietnam"
          distance="10067km"
          image="https://image.noelshack.com/fichiers/2019/13/1/1553517155-vietnam.jpg"
        />
        <Travel
          destination="Central America"
          country="Costa Rica"
          distance="8912 km"
          image="https://image.noelshack.com/fichiers/2019/13/1/1553517150-costarica.jpg"
        />
      </div>
    );
  }
}

export default App;