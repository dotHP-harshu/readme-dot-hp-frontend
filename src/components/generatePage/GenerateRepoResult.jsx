import React, { useContext, useEffect, useState } from "react";
import GenerateRepoResultLeft from "./GenerateRepoResultLeft";
import GenerateRepoResultRight from "./GenerateReopResultRight";
import gitDataContext from "../../contexts/gitDataContext";
import GenerateReadme from "./GenerateReadme";

function GenerateRepoResult() {
  const { gitData } = useContext(gitDataContext);
  const [fileText, setFileText] = useState("");
  const [fileArray, setFileArray] = useState(gitData.data.map((f) => f.file));
  const [filteredArray, setFilteredArray] = useState(fileArray);

  useEffect(() => {
    let filterTextArray = gitData.data.filter((file) => {
      return filteredArray.includes(file.file);
    });
    let textArray = filterTextArray.map((file) => {
      return `${file.file} => \n ${file.content}`;
    });
    textArray = [`Repo url: ${gitData.repo}`, ...textArray];
    setFileText(textArray.join("\n\n"));
  }, [filteredArray]);
  return (
    <>
      <div className="w-full flex lg:flex-row sm:flex-col max-sm:flex-col mt-16 space-y-6">
        <GenerateRepoResultLeft
          fileArray={fileArray}
          setFilteredArray={setFilteredArray}
          filteredArray={filteredArray}
        />
        <GenerateRepoResultRight fileText={fileText} />
      </div>
      <GenerateReadme fileText={fileText} />
    </>
  );
}

export default GenerateRepoResult;
