import React, { Component } from "react";

class Counter extends Component {
  // To handle handlers , you have to define them in the constructor:
  // constructor() {
  //   //Constructor of the parent class.
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //or:

  render() {
    let product;
    return (
      <div>
        <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeStyle() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
