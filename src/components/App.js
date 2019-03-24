import React from "react";
import "semantic-ui-css/semantic.min.css";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("skydive");
  }
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <h1>Youtube Videos!</h1>
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <GridColumn width={12}>
            <VideoDetail video={this.state.selectedVideo} />
          </GridColumn>
          <GridColumn width={4}>
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </GridColumn>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
