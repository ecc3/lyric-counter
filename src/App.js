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
    artistError: false,
    isLoading: false,
    showWordCloud: false
  };

  handleChange = ({ target }) => {
    if (target.value === "") {
      this.setState({ artist: "", averageWordCount: "", allSongWords: [] });
    } else this.setState({ artist: target.value, averageWordCount: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    getArtistId(this.state.artist, this.updateData);
  };

  updateData = (
    averageWordCount,
    minWordCount,
    maxWordCount,
    allSongWords,
    artistError
  ) => {
    this.setState({
      averageWordCount,
      minWordCount,
      maxWordCount,
      allSongWords,
      artistError,
      isLoading: false
    });
  };

  handleClick = () => {
    this.setState(currentState => {
      return { showWordCloud: !currentState.showWordCloud };
    });
  };

  render() {
    const {
      artist,
      averageWordCount,
      isLoading,
      minWordCount,
      maxWordCount,
      allSongWords,
      showWordCloud,
      artistError
    } = this.state;
    return (
      <main className="main">
        <div className="content">
          <form action="" onSubmit={this.handleSubmit}>
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
            {(isNaN(averageWordCount) || artistError) && (
              <p>Not found. Please search for a different artist.</p>
            )}
            {averageWordCount && !isNaN(averageWordCount) && (
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
          <section>
            <button onClick={this.handleClick} className="submit">
              {showWordCloud && "Hide Word Cloud"}
              {!showWordCloud && "Show Word Cloud"}
            </button>
            {showWordCloud && !averageWordCount && (
              <p>Please search for an artist</p>
            )}
            {showWordCloud && averageWordCount && (
              <WordCloud words={allSongWords} />
            )}
          </section>
        </div>
      </main>
    );
  }
}

export default App;
