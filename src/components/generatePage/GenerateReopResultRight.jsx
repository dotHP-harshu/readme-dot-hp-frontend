import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import LabelPara from "./LabelPara";

function GenerateReopResultRight({ fileText }) {
  const [copyName, setCopyName] = useState("Copy all");
  const downloadBtn = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(fileText).then(() => setCopyName("Copied"));
  };
  const hadleDownload = () => {
    let blob = new Blob([fileText], { type: "text/plain" });
    let url = URL.createObjectURL(blob);

    const link = downloadBtn.current;
    link.href = url;
    link.download = "gitdata.txt";
    link.click();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCopyName("Copy All");
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [copyName]);

  return (
    <div className="lg:w-[60%] px-6 sm:w-full max-sm:w-full">
      <div className="px-6 py-4 border-2 border-text-main relative bg-secondary-color space-y-4 before:top-0 before:left-0 before:border-2 before:border-text-main before:absolute before:translate-2 before:w-full before:h-full before:-z-10 ">
        <LabelPara para={"This is the text of selected files."} />
        <div className="button-container space-x-4 ">
          <Button name={copyName} onClick={handleCopy} />
          <Button name={"Download"} onClick={hadleDownload} />
          <a className="hidden" ref={downloadBtn}>
            download
          </a>
        </div>
        <div className="textbox bg-bg-color border-2 border-text-muted p-6 text-base overflow-y-scroll max-h-[600px] h-[600px] font-box-text">
          <pre className="font-box-text">{fileText}</pre>
        </div>
      </div>
    </div>
  );
}

export default GenerateReopResultRight;
