import React, { Component } from "react";
import { getArtistId } from "./utils";

class App extends Component {
  state = {
    artist: "",
    averageWordCount: ""
  };

  handleChange = ({ target }) => {
    if (target.value === "") {
      this.setState({ artist: "", averageWordCount: "" });
    } else this.setState({ artist: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    getArtistId(this.state.artist, this.updateAverageWordCount);
  };

  updateAverageWordCount = averageWordCount => {
    this.setState({ averageWordCount }, () => {
      console.log(this.state.averageWordCount, "state awc");
    });
  };

  render() {
    return (
      <main>
        <form action="" onSubmit={this.handleSubmit}>
          Artist name:{" "}
          <input
            type="text"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.state.averageWordCount && (
          <p>
            Average words in {this.state.artist} songs:{" "}
            {this.state.averageWordCount}
          </p>
        )}
      </main>
    );
  }
}

export default App;
