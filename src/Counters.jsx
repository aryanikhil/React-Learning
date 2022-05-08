import { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = (id) => {
    this.state.counters.map((x) => {
      if (x.id === id) {
        x.value++;
        return x;
      }
      return x;
    });

    this.setState({ counters: this.state.counters });
  };

  handleDecrement = (id) => {
    this.state.counters.map((x) => {
      if (x.id === id) {
        x.value--;
        return x;
      }
      return x;
    });

    this.setState({ counters: this.state.counters });
  };

  handleDelete = (id) => {
    let counters = this.state.counters.filter((x) => x.id !== id);

    this.setState({ counters });
  };

  handleAddNewItem = () => {
    let maxId = 0;

    this.state.counters.forEach((x) => {
      if (x.id > maxId) maxId = x.id;
    });

    this.state.counters.push({
      id: maxId + 1,
      value: 0
    });

    this.setState({ counters: this.state.counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}

        <button onClick={this.handleAddNewItem} className="btn btn-success m-4">
          <b>Add New</b>
        </button>
      </div>
    );
  }
}

export default Counters;
