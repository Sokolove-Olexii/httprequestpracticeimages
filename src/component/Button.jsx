import { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        <button class="Button" onClick={this.props.onClick}>
          Load more
        </button>
      </div>
    );
  }
}
