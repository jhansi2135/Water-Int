import "./image.css";
import waterfalling from "./waterfalling.mp4";
import Audiowaterfalling from "./Audiowaterfalling.mp4";

export function ImageGif() {
  return (
    <>
      <video className="video" autoPlay muted>
        <source src={waterfalling} type="video/mp4" />
      </video>
      <audio autoPlay>
        <source src={Audiowaterfalling} type="audio/mp4" />
      </audio>
    </>
  );
}
