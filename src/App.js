import React, { Component } from "react";
import { getArtistId } from "./utils";
import Loader from "./components/Loader";
import "./App.css";

class App extends Component {
  state = {
    artist: "",
    averageWordCount: "",
    isLoading: false
  };

  handleChange = ({ target }) => {
    if (target.value === "") {
      this.setState({ artist: "", averageWordCount: "" });
    } else this.setState({ artist: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    getArtistId(this.state.artist, this.updateAverageWordCount);
  };

  updateAverageWordCount = averageWordCount => {
    this.setState({ averageWordCount, isLoading: false });
  };

  render() {
    const { artist, averageWordCount, isLoading } = this.state;
    return (
      <main className="main">
        <div className="content">
          <form action="" onSubmit={this.handleSubmit} className="form">
            Artist name:{" "}
            <input
              type="text"
              name="artist"
              value={artist}
              onChange={this.handleChange}
              className="submit"
            />
            <br />
            <input type="submit" value="Submit" className="submit" />
            {this.state.averageWordCount && (
              <p>
                Average words in {artist} songs: {averageWordCount}
              </p>
            )}
            {isLoading && <Loader />}
          </form>
        </div>
      </main>
    );
  }
}

export default App;
