import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["Tag1", "Tag2", "Tag3"]
  };

  // To handle handlers , you have to define them in the constructor:
  // constructor() {
  //   //Constructor of the parent class.
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //or:

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let product;
    return (
      <div>
        <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeStyle() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
