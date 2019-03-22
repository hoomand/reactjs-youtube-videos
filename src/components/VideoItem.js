import React from "react";

class VideoItem extends React.Component {
  render() {
    const { video } = this.props;
    return (
      <div>
        <img src={video.snippet.thumbnails.medium.url} />
        {video.snippet.title}
      </div>
    );
  }
}

export default VideoItem;
