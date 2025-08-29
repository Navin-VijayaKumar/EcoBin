import { useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,   // from your screenshot
          backgroundAlpha: 1,
          color1: 0x7ff00,            // red
          color2: 0x0d1fff,            // cyan
          colorMode: "varianceGradient",
          quantity: 4,
          birdSize: 1,
          wingSpan: 15,
          speedLimit: 5,
          separation: 10,
          alignment: 20,
          cohesion: 20,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="vanta-bg">
      <div className="con">
        <h1 className="title">
          <span className="l">Eco</span>
          <span className="m">Bin</span>
        </h1>

        <label className="input-feild">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="file-input"
          />
          <FaCloudUploadAlt className="upload-icon" />
          <p className="upload-text">{file ? file.name : "Upload Image"}</p>
        </label>

        <div className="output">
          <h1>Output:</h1>
          <h1>Bio Degradable</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
