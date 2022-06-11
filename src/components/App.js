import video from "../data/video.js";
import Title from "./Title.js";

function App() {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title video={video} />
    </div>
  );
}

export default App;
