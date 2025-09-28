import { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
  }

  handleEsc = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div class="Overlay" onClick={this.handleOverlayClick}>
        <div class="Modal">
          <img src={this.props.image} alt="#" />
        </div>
      </div>
    );
  }
}
