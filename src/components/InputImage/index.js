import React from "react";

export const InputImg = ({ multiple = false, onDone }) => {
  // const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    // get the files
    const files = e.target.files;
    // Process each file
    const allFiles = [];
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      // Make new FileReader
      const reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        const fileInfo = {
          name: file.name,
          type: file.type,
          size: `${Math.round(file.size / 1000)}kB`,
          base64: reader.result,
          file,
        };

        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
        if (allFiles.length === files.length) {
          // Apply Callback function
          if (multiple) onDone(allFiles);
          else onDone(allFiles[0]);
        }
      }; // reader.onload
    }
  };

  return <input type="file" onChange={handleChange} multiple={true} />;
};
