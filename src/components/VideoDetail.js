import React from "react";
import { Segment, Header, Embed } from "semantic-ui-react";

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;
    if (!video) {
      return <div>Loading...</div>;
    }

    return (
      <Segment>
        <Embed id={video.id.videoId} source="youtube" />
        <Header>{video.snippet.title}</Header>
        <p>{video.snippet.description}</p>
      </Segment>
    );
  }
}

export default VideoDetail;
