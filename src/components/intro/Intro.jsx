import React from "react";
import IntroMain from "./IntroMain";

function Intro({ setShowIntro }) {
  return (
    <div>
      <IntroMain setShowIntro={setShowIntro} />
    </div>
  );
}

export default Intro;
