// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import videojsOverlay from "./overlay-advanced-plugin";

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate video.js
    videojs.registerPlugin("videojsOverlay", videojsOverlay)

    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
    console.log(this.player)
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
        <>
      <div data-vjs-player>
        <video ref={node => (this.videoNode = node)} className="video-js vjs-big-play-centered" />
      </div>
      </>
    );
  }
}
