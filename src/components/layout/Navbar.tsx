import GithubIcon from "@/assets/icons/github";
import React from "react";
import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between bg-white px-5 py-4 shadow-sm shadow-gray-300 gap-4">
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="font-bold text-2xl">Audio Renamer</h1>
        <p className="text-sm">Upload a audio, change name by us 🙌</p>
      </div>
      <Button
        link="https://github.com/nafasebra/audio-renamer"
        variant="outline"
        color="dark"
        tag="a"
        attr={{ target: "_blank" }}
      >
        <GithubIcon />
        <span>See the repository</span>
      </Button>
    </nav>
  );
}

export default Navbar;
