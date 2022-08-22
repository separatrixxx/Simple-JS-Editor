import React from "react";

function App() {
  return (
      <div className="flex flex-col w-full items-start">
        <div className="flex flex-row w-full items-center p-5">
          <button id="btn" className="w-20 md:w-24 h-8 md:h-9 bg-green-600 rounded-lg text-white text-sm md:text-lg
          hover:bg-green-700 transition-colors duration-500 ease-in-out">Run</button>
          <a href="https://github.com/separatrixxx/Simple-JS-Editor" target="_blank" className="ml-3 text-gray-400
          hover:text-gray-500 transition-colors duration-500 ease-in-out text-sm md:text-lg">Simple JS Editor by separatrix</a>
        </div>
        <div className="flex flex-row w-full">
          <textarea id="textarea2" readOnly spellCheck="false" className="w-1/15 md:w-1/7 h-87/100 resize-none overflow-hidden
          focus:outline-none bg-gray-200 p-2 text-sm font-thin text-end"></textarea>
          <textarea id="textarea" spellCheck="false" className="w-1/85 md:w-1/93 h-87/100 resize-none focus:outline-none
          bg-gray-100 p-2 text-sm font-thin text-gray-700"></textarea>
        </div>
      </div>
  );
}

export default App;
