import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-5 py-4 shadow-sm shadow-gray-300">
      <div className="space-y-2">
        <h1 className="font-bold text-2xl">Audio Renamer</h1>
        <p className="text-sm">Upload a audio, change name by us 🙌</p>
      </div>
      <a href="https://github.com/nafasebra/audio-renamer" className="py-2 px-4 flex items-center gap-3 border border-black rounded-lg hover:bg-black hover:text-white transition-colors" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
        See the repository
      </a>
    </nav>
  );
}

export default Navbar;
