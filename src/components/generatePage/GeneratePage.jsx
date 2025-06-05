import React, { useState } from "react";
import InputComponent from "./InputComponent";
import GenerateRepoResult from "./GenerateRepoResult";
import gitDataContext from "../../contexts/gitDataContext";
import { IoArrowBack } from "react-icons/io5";
import { RiLoader5Line } from "react-icons/ri";

function GeneratePage({ setShowIntro }) {
  const [gitData, setGitData] = useState(null);
  return (
    <gitDataContext.Provider value={{ gitData, setGitData }}>
      <section className="py-20 relative">
        <IoArrowBack
          size={40}
          className="absolute top-4 left-4 cursor-pointer hover:border-text-muted hover:text-text-muted border-2 border-transparent p-2 rounded-full transition-all duration-300 hover:scale-95 "
          onClick={() => setShowIntro(true)}
        />
        <div className="w-full flex justify-center items-center">
          <InputComponent />
        </div>
        {gitData === null && (
          <div
            className="text-center bg-bg-color text-text-muted font-heading border-2 border-text-muted relative mx-auto w-fit px-4 py-2 mt-10 before:top-0 before:left-0 before:border-2 before:border-text-muted before:absolute before:translate-2 before:w-full before:h-full before:-z-10
            "
          >
            Enter the github repository link and click on send button.
          </div>
        )}
        {gitData === "loading" && (
          <RiLoader5Line
            size={50}
            className="animate-spin w-fit mx-auto mt-10"
          />
        )}
        {gitData?.error && (
          <div
            className="text-center bg-red-100 text-text-main font-heading border-2 border-red-700 relative mx-auto w-fit px-4 py-2 mt-10 before:top-0 before:left-0 before:border-2 before:border-red-700 before:absolute before:translate-2 before:w-full before:h-full before:-z-10
           "
          >
            {gitData.error}
          </div>
        )}
        {gitData?.data && (
          <div className="w-full">
            <GenerateRepoResult />
          </div>
        )}
      </section>
    </gitDataContext.Provider>
  );
}

export default GeneratePage;
