import { Component } from "react";

export default class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onSelect(this.props.largeImg);
  };

  render() {
    const { smallImg, tags = "" } = this.props;
    return (
      <li class="ImageGalleryItem" onClick={this.handleClick}>
        <img src={smallImg} alt={tags} class="ImageGalleryItem-image" />
      </li>
    );
  }
}
