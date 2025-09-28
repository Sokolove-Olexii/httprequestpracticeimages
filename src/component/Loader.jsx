import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";

export default class Loader extends Component {
  render() {
    return (
      <div class="Loader-wrapper">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    );
  }
}
