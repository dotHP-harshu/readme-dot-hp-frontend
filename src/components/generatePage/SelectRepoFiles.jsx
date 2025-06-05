import React, { useState } from "react";

function SelectRepoFiles({ fileArray, selectedFiles, setSelectedFiles }) {
  const [filteredArray, setFilteredArray] = useState([]);
  const handleSelectedFile = (e) => {
    let value = e.target.value;
    setSelectedFiles((prev) => {
      if (prev.includes(value)) {
        return prev.filter((p) => p != value);
      } else {
        return [...prev, value];
      }
    });
  };
  // console.log(filteredArray);
  return (
    <div className="border-text-muted border-2 p-4 bg-bg-color overflow-scroll max-h-96">
      {fileArray.map((fileName) => (
        <span key={fileName + fileName.length} className="block">
          <input
            type="checkbox"
            value={fileName}
            name="selected-file"
            id={fileName}
            className="peer hidden"
            onChange={handleSelectedFile}
          />
          <label
            htmlFor={fileName}
            className="select-none cursor-cell peer-checked:line-through peer-checked:text-text-muted"
          >
            {fileName}
          </label>
        </span>
      ))}
    </div>
  );
}

export default SelectRepoFiles;
