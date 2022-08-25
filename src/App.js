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
          <textarea id="textarea2" readOnly spellCheck="false" className="w-1/15 md:w-1/7 h-43/100 md:h-87/100 resize-none overflow-hidden
          focus:outline-none bg-gray-200 p-2 text-sm font-thin text-end tracking-wider"></textarea>
          <div className="flex flex-col md:flex-row w-1/85 md:w-1/93 h-43/100 md:h-87/100">
              <textarea id="textarea" spellCheck="false" className="w-full md:w-1/2 h-full resize-none focus:outline-none
          bg-gray-100 p-2 text-sm font-thin text-gray-700 tracking-wider"></textarea>
              <div className="w-1/2 h-full bg-gray-200 p-2 hidden md:block">
                  <h1 className="text-lg font-thin mb-3">Errors:</h1>
                  <p id="error_message_1" className="text-sm font-thin text-red-500"></p>
              </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 p-2 block md:hidden h-43/100">
            <h1 className="text-lg font-thin mb-3">Errors:</h1>
            <p id="error_message_2" className="text-sm font-thin text-red-500"></p>
        </div>
      </div>
  );
}

export default App;
