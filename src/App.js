import overlay from "./overlay-plugin";
import VideoPlayer from "./VideoPlayer"
function App() {
  const videoJsOptions = {
    autoplay: false,
    controls: false,
    sources: [{
      src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
      type: 'video/mp4'
    }],
    plugins: {
      overlay:{}
    }
  }
  return (
    <div>
      <VideoPlayer

      />
    </div>
  );
}

export default App;
