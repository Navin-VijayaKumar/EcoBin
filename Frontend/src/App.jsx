import { useState } from 'react'
import './App.css'
import { FaCloudUploadAlt } from "react-icons/fa";

function App() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="con">
      {/* Header */}
      <div className="title-con">
        <h1 className='title'><span className='l'>Eco</span><span className='m'>Bin</span></h1>
      </div>

      {/* Upload Box */}
      <label className="input-feild">
        <input 
          type="file" 
          onChange={handleChange} 
          className="file-input"
        />
        <FaCloudUploadAlt className="upload-icon" />
        <p className="upload-text">{file ? file.name : "Upload Image"}</p>
      </label>
    </div>
  )
}

export default App
