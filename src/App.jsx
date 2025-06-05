import { useState } from "react";
import GeneratePage from "./components/generatePage/GeneratePage";
import Intro from "./components/intro/Intro";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div>
      {!showIntro ? (
        <GeneratePage setShowIntro={setShowIntro} />
      ) : (
        <Intro setShowIntro={setShowIntro} />
      )}
    </div>
  );
}

export default App;
