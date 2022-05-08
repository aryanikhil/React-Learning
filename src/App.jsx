import { Component } from "react";
import Counter from "./Counter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Counters from "./Counters";

class App extends Component {
  render() {
    return (
      <div>
        <Counters />
      </div>
    );
  }
}

export default App;
