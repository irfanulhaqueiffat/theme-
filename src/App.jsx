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
      <div className="w-[800px] h-[600px]  mb-10 p-10 bg-black dark:bg-pink-400 border-4 border-black dark:border-white flex flex-col justify-between items-center">
        
        
        <h1 className="text-3xl text-white text-shadow-emerald-950 dark:text-shadow-black font-semibold text-10 border-4 border-white dark:border-4 dark:border-black">A FULL STACK DEVELOPER</h1>
        <p className="text-white dark:text-black text-4xl  font-semibold text-10">
          A website developer brief is a foundational document that outlines the goals, audience, technical requirements, and design preferences for a web project, serving as a roadmap for developers and a key tool for managing expectations. It includes details such as project objectives, budget, timeline, target audience, content needs, and desired features to ensure a shared 
        </p>

        <button
          onClick={handleMode}
          className="relative inline-flex h-12 w-24 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 transition-all duration-500 hover:scale-105"
          aria-label="Toggle theme"
        >
          <div className={`absolute left-1.5 h-10 w-10 transform rounded-full bg-white shadow-md transition-transform duration-500 ease-in-out ${mode === "Light" ? "translate-x-12" : "translate-x-0"}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {mode === "Light" ? (
                // Sun icon
                <div className="h-6 w-6 text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              ) : (
                // Moon icon
                <div className="h-6 w-6 text-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <span className={`absolute text-xs font-medium text-white transition-opacity duration-500 ${mode === "Light" ? "left-3 opacity-100" : "right-3 opacity-100"}`}>
            {mode}
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;


