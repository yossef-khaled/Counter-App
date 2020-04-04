import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondry m-2">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
