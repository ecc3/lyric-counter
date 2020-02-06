import React, { Component } from "react";

class App extends Component {
  state = {
    artist: ""
  };

  handleChange = ({ target }) => {
    this.setState({ artist: target.value }, () => {
      console.log(this.state.artist);
    });
  };

  render() {
    return (
      <main>
        <form action="">
          Artist name:{" "}
          <input
            type="text"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <br />
        </form>
      </main>
    );
  }
}

export default App;
