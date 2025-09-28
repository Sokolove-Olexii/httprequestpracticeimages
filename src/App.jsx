import Searchbar from "./component/Searchbar";
import ImageGallery from "./component/ImageGallery";
import Button from "./component/Button";
import Loader from "./component/Loader";
import Modal from "./component/Modal";
import { Component } from "react";
import axios from "axios";

const API_KEY = "36609011-61ae1cd37a6d0352dff5d0631";
const BASE_URL = "https://pixabay.com/api/";

export default class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    selectedImage: null,
    error: null,
    totalHits: 0,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;

    if (!query.trim()) return;

    this.setState({ isLoading: true, error: null });

    try {
      const { data } = await axios.get(BASE_URL, {
        params: {
          q: query,
          page,
          key: API_KEY,
          per_page: 15,
          image_type: "photo",
          orientation: "horizontal",
        },
      });

      if (data.hits.length === 0 && page === 1) {
        this.setState({
          error: "Виникла помилка",
          isLoading: false,
        });
        return;
      }

      this.setState((prev) => ({
        images: page === 1 ? data.hits : [...prev.images, ...data.hits],
        isLoading: false,
        totalHits: data.totalHits,
      }));
    } catch (error) {
      console.error("Виникла помилка", error);
      this.setState({
        isLoading: false,
        error: "Помилка при завантаженні зображень. Спробуйте ще раз.",
      });
    }
  };

  handleSearch = (newQuery) => {
    if (newQuery === this.state.query) return;
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
      error: null,
      totalHits: 0,
    });
  };

  selectImage = (imageURL) => {
    this.setState({ selectedImage: imageURL });
  };

  loadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage, error, totalHits } = this.state;
    const showButton =
      images.length > 0 && !isLoading && images.length < totalHits;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p className="error-message">{error}</p>}
        <ImageGallery images={images} onSelect={this.selectImage} />
        {isLoading && <Loader />}
        {showButton && <Button onClick={this.loadMore} />}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
