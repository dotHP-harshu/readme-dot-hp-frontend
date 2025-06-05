import React, { useRef, useState } from "react";
import Button from "./Button";
import { RiLoader5Line } from "react-icons/ri";

function GenerateReadme({ fileText }) {
  const [readmeText, setReadmeText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [copyName, setCopyName] = useState("Copy all");
  const downloadBtn = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(readmeText).then(() => setCopyName("Copied"));
  };

  const hadleDownload = () => {
    let blob = new Blob([readmeText], { type: "text/plain" });
    let url = URL.createObjectURL(blob);

    const link = downloadBtn.current;
    link.href = url;
    link.download = "README.md";
    link.click();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  };

  const handleGenerateReadme = async () => {
    setIsLoading(true);
    seterror(null);
    let text = JSON.stringify(fileText);
    try {
      const respose = await fetch(`${import.meta.env.VITE_MAKE_README_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
        }),
      });
      if (!respose.ok) {
        setIsLoading(false);
        console.log(Response);

        return seterror(`Error on getting data:${respose.status}`);
      }
      const data = await respose.json();
      if (data.error) {
        setIsLoading(false);
        console.log(data.error);
        return seterror(data.error);
      }
      setIsLoading(false);
      seterror(null);
      setReadmeText(data.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      return seterror(`Error: ${error.message}`);
    }
  };
  return (
    <div className="mt-10 px-6">
      <div className="px-6 py-4 mx-auto border-2 w-3/4 max-sm:w-full flex flex-col items-center justify-center gap-4 border-text-main relative bg-secondary-color space-y-4 before:top-0 before:left-0 before:border-2 before:border-text-main before:absolute before:translate-2 before:w-full before:h-full before:-z-10 ">
        <p className="text-text-muted text-base max-sm:text-sm font-heading p-2 border-2 border-text-muted bg-bg-color">
          ⚠️Note: We're running this tool on a free AI service that has limits
          on how much data it can process. To get the best and fastest results,
          please uncheck files that don’t matter.
        </p>
        {isLoading ? (
          <p className="text-sm font-box-text">Generating README...</p>
        ) : (
          <Button name={"Generate Readme"} onClick={handleGenerateReadme} />
        )}
      </div>

      {isLoading && (
        <RiLoader5Line size={50} className="animate-spin w-fit mx-auto mt-10" />
      )}
      {error && (
        <div
          className="text-center bg-red-100 text-text-main font-heading border-2 border-red-700 relative mx-auto w-fit px-4 py-2 mt-10 before:top-0 before:left-0 before:border-2 before:border-red-700 before:absolute before:translate-2 before:w-full before:h-full before:-z-10
         "
        >
          {error} Try again
        </div>
      )}
      {readmeText != "" && (
        <div className="mt-10">
          <div
            className="text-center bg-yellow-100 text-text-main font-heading border-2 border-yellow-400-700 relative mx-auto w-fit px-4 py-2 mt-10 before:top-0 before:left-0 before:border-2 before:border-yellow-700 before:absolute before:translate-2 before:w-full before:h-full before:-z-10
     "
          >
            This tool uses a free AI model to generate summaries based on the
            provided repository data. Due to token limitations and automated
            processing, the generated content may not be 100% accurate or
            complete.
            <strong>
              Always review and modify the README before using it publicly.
            </strong>
          </div>
          <div className="px-6 mt-10 py-4 border-2 border-text-main relative bg-secondary-color space-y-4 before:top-0 before:left-0 before:border-2 before:border-text-main before:absolute before:translate-2 before:w-full before:h-full before:-z-10 ">
            <div className="button-container space-x-4 ">
              <Button name={copyName} onClick={handleCopy} />
              <Button name={"Download"} onClick={hadleDownload} />
              <a className="hidden" ref={downloadBtn}>
                download
              </a>
            </div>
            <div className="textbox bg-bg-color border-2 border-text-muted p-6 text-base overflow-y-scroll max-h-[600px] h-[600px] font-box-text">
              <pre className="font-box-text">{readmeText}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GenerateReadme;
