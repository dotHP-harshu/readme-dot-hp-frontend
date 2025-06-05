import React, { useContext, useState } from "react";
import Button from "./Button";
import LabelPara from "./LabelPara";
import gitDataContext from "../../contexts/gitDataContext";

function InputComponent() {
  const [gitRepoUrl, setGitRepoUrl] = useState("");
  const { setGitData } = useContext(gitDataContext);

  const handleGitUrl = async () => {
    setGitData("loading");
    try {
      const respose = await fetch(`${import.meta.env.VITE_GIT_FETCH_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: gitRepoUrl,
        }),
      });
      if (!respose.ok) return console.log("Error on fetching data" + respose);
      const data = await respose.json();
      if (data.error) {
        return setGitData(data);
      }
      setGitData({ repo: gitRepoUrl, data });
      setGitRepoUrl("");
    } catch (err) {
      return setGitData({ error: err.message });
    }
  };

  return (
    <div className=" w-fit bg-secondary-color px-6 py-4  border-2 border-text-main relative flex-col items-center justify-center before:top-0 before:left-0 before:border-2 before:border-text-main before:absolute before:translate-2 before:w-full before:h-full before:-z-10">
      <LabelPara para={"Paste or type the URL of git repo."} />
      <div className="space-x-4">
        <input
          onChange={(e) => {
            setGitRepoUrl(e.target.value);
          }}
          value={gitRepoUrl}
          type="text"
          placeholder="https://github.com/username/repo-name"
          className="px-4 py-2 border-text-muted border-2 lg:w-2xl sm:w-lg bg-bg-color"
        />
        <Button name={"Send"} onClick={handleGitUrl} />
      </div>
    </div>
  );
}

export default InputComponent;
