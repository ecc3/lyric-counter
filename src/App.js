import React, { Component } from "react";
import { getArtistId } from "./utils";
import Loader from "./components/Loader";
import "./App.css";
import WordCloud from "./components/WordCloud";

class App extends Component {
  state = {
    artist: "",
    averageWordCount: "",
    minWordCount: "",
    maxWordCount: "",
    allSongWords: [],
    isLoading: false,
    showWordCloud: false
  };

  handleChange = ({ target }) => {
    if (target.value === "") {
      this.setState({ artist: "", averageWordCount: "" });
    } else this.setState({ artist: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    getArtistId(this.state.artist, this.updateData);
  };

  updateData = (averageWordCount, minWordCount, maxWordCount, allSongWords) => {
    this.setState({
      averageWordCount,
      minWordCount,
      maxWordCount,
      allSongWords,
      isLoading: false
    });
  };

  handleClick = () => {
    this.setState(currentState => {
      return this.setState({ showWordCloud: !currentState.showWordCloud });
    });
  };

  render() {
    const {
      artist,
      averageWordCount,
      isLoading,
      minWordCount,
      maxWordCount,
      showWordCloud
    } = this.state;
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
              <div>
                <p>
                  Average words in songs by {artist}: {averageWordCount}
                </p>
                <p>Maximum words across songs sampled: {maxWordCount}</p>
                <p>Minimum words across songs sampled: {minWordCount}</p>
              </div>
            )}
            {isLoading && <Loader />}
          </form>
          <button onClick={this.handleClick} className="submit">
            Show Word Cloud
          </button>
          {showWordCloud && <WordCloud />}
        </div>
      </main>
    );
  }
}

export default App;
