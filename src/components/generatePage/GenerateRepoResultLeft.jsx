import React, { useEffect, useState } from "react";
import SelectRepoFiles from "./SelectRepoFiles";
import Button from "./Button";
import LabelPara from "./LabelPara";

function GenerateRepoResultLeft({
  fileArray,
  setFilteredArray,
  filteredArray,
}) {
  const [selectedFiles, setSelectedFiles] = useState([...filteredArray]);
  return (
    <div className=" lg:w-[40%] max-sm:w-full sm:w-full px-6 ">
      <div className="px-6 py-4 border-2 border-text-main relative bg-secondary-color space-y-4 before:top-0 before:left-0 before:border-2 before:border-text-main before:absolute before:translate-2 before:w-full before:h-full before:-z-10 ">
        <LabelPara para={"Select only usable files."} />
        <SelectRepoFiles
          fileArray={fileArray}
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
        <div className="button-container space-x-4 ">
          <Button
            name={"Get data"}
            onClick={() => {
              setFilteredArray(selectedFiles);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default GenerateRepoResultLeft;
