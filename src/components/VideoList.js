import React from "react";
import VideoItem from "./VideoItem";
import { List } from "semantic-ui-react";

class VideoList extends React.Component {
  render() {
    const renderedList = this.props.videos.map(video => {
      return (
        <VideoItem video={video} onVideoSelect={this.props.onVideoSelect} />
      );
    });

    return (
      <List divided relaxed>
        {renderedList}
      </List>
    );
  }
}

export default VideoList;
