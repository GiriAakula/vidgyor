import Videojs from "./video.js";

function App() {
  const videoJsOptions = {
    autoplay: false,
    autoplay: false,
    controls: true,
    sources: [
      {
        src: "http://media.w3.org/2010/05/bunny/movie.mp4",
        type: 'video/mp4',
      },
    ],
    plugins:{
      "videojsOverlay":{ }
    }
  };
  return (
    <div>
    <Videojs {...videoJsOptions} className="video-js" />
  </div>
  );
}

export default App;
