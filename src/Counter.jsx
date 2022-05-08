import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2 p-2">
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-primary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter.id)}
          className="btn btn-warning btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          <b>Delete</b>
        </button>
      </div>
    );
  }
}

export default Counter;
