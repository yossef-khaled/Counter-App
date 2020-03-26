import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Tag1", "Tag2", "Tag3"]
  };

  // To handle handlers , you have to define them in the constructor:
  // constructor() {
  //   //Constructor of the parent class.
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }

  //or:

  handleIncreament = () => {
    console.log("You pressed increament button");
    this.state.count++;
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncreament}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeStyle() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
