import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends Component {
  render() {
    const { images, onSelect } = this.props;
    return (
      <ul class="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            onSelect={onSelect}
            largeImg={largeImageURL}
            smallImg={webformatURL}
          />
        ))}
      </ul>
    );
  }
}
