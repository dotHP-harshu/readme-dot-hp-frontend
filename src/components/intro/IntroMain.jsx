import React from "react";
import { IoArrowForward } from "react-icons/io5";

function IntroMain({ setShowIntro }) {
  return (
    <main className="w-full h-dvh flex justify-center items-center flex-col gap-6">
      <div className="icon">
        {/* <img
          src="/icons/icon.svg"
          alt="icon"
          className="w-40 h-auto sm:w-20 max-sm:w-10 drop-shadow-lg drop-shadow-text-main"
        /> */}
      </div>
      <div className="heading">
        <h1 className="lg:text-6xl sm:text-4xl max-sm:text-xl font-heading text-center font-bold border-b-4 borer-b">
          README.HP
        </h1>
      </div>
      {/* <div className="subheading">
      <h2 className="lg:text-3xl sm:text-xl max-sm:text-lg mt-10 font-box-heading text-text-muted text-center italic">
        Instantly Generate Smart READMEs from Any GitHub Repository
      </h2>
    </div> */}
      <div className="paragraph w-1/2 ">
        <p className="lg:text-base max-sm:text-xs mt-4 text-text-main text-center ">
          Writing a good README.md file takes time — but it doesn’t have to.
          With our tool, just paste a GitHub repository URL and instantly get a
          clean, concise, and developer-friendly README powered by artificial
          intelligence.
        </p>
      </div>

      <div
        className="button mt-6
    "
      >
        <button
          onClick={() => {
            setShowIntro(false);
          }}
          className="bg-secondary-color flex justify-center items-center gap-4 relative transition-colors px-6 py-2 border-2 border-primary-color duration-200 cursor-pointer hover:border-text-main hover:text-text-muted before:absolute before:top-0 before:left-0 before:border-2 before:border-transparent hover:before:border-text-main before:h-full  before:w-full before:transition-all before:duration-200 hover:before:translate-2 before:-z-10 "
          // className="bg-secondary-color px-4 py-1 border-2 border-primary-color rounded-lg duration-200 hover:border-text-main hover:bg-primary-color hover:text-bg-color cursor-pointer hover:-translate-y-1 hover:shadow-gray-700 hover:shadow-lg active:translate-y-1 "
        >
          Get started <IoArrowForward />
        </button>
      </div>
    </main>
  );
}

export default IntroMain;
