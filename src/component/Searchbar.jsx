import { Component } from "react";

export default class Searchbar extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.input.trim()) return;
    this.props.onSubmit(this.state.input.trim());
    this.setState({ input: "" });
  };

  render() {
    return (
      <header class="Searchbar">
        <form class="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" class="SearchForm-button">
            <span class="SearchForm-button-label">Search</span>
          </button>

          <input
            class="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
