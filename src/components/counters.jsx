import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(
      counter => counter.id != counterID
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            id={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
