import { useState } from "react";
import axios from "../axios"; // Use Axios instance

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState(null); // State to store image URL

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      try {
        const { data } = await axios.post("/api/upload_files", {
          name: file.name,
          data: reader.result,
        });

        setMessage("File uploaded successfully!");
        setImageUrl(data.imageUrl); // Set the uploaded image URL
      } catch (error) {
        setMessage("Error uploading file.");
        console.error(error);
      }
    };
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>

      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
