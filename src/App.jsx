import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [mode, setMode] = useState("Dark");

  const entireHTML = document.querySelector("html");

  const handleMode = () => {
    entireHTML.classList.toggle("dark");
    if (entireHTML.classList.contains("dark")) {
      setMode("Light");
    } else {
      setMode("Dark");
    }
  };

  console.log(entireHTML.classList.contains("dark"));

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center dark:bg-black">
      <div className="w-[800px] h-[200px] p-5 bg-white dark:bg-black border-4 border-black dark:border-white flex flex-col justify-between items-center">
        <p className="text-black dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ut
          aspernatur, vero modi, repellat minus placeat ullam odio dicta
          veritatis iure aperiam obcaecati voluptatibus ducimus illo reiciendis
          rem repellendus sed, repudiandae est in ab asperiores pariatur.
          Eveniet accusantium, hic quaerat illum commodi temporibus aliquid
          nulla, repellat ratione veniam ut nemo.
        </p>

        <button
          onClick={handleMode}
          className="inline-block py-1 px-2 bg-black dark:bg-white text-white dark:text-black"
        >
          {mode}
        </button>
      </div>
    </div>
  );
};

export default App;


