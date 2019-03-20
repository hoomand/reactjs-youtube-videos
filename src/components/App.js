import React from "react";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1>Youtube Videos!</h1>

        <SearchBar />
      </div>
    );
  }
}

export default App;
