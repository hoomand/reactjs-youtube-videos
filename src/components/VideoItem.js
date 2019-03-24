import React from "react";
import "./VideoItem.scss";
import { ListItem, List, Image } from "semantic-ui-react";

class VideoItem extends React.Component {
  render() {
    const { video } = this.props;
    return (
      <ListItem
        className="video-item"
        onClick={() => this.props.onVideoSelect(video)}
        key={video.id.videoId}
      >
        <Image src={video.snippet.thumbnails.medium.url} />
        <List.Content>
          <List.Header>{video.snippet.title}</List.Header>
        </List.Content>
      </ListItem>
    );
  }
}

export default VideoItem;
