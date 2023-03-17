import { ChangeEvent, FormEvent, useState } from "react";

function FileInput() {
  const [filename, setFilename] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      !(event.target instanceof HTMLInputElement) ||
      (event.target as HTMLInputElement).files?.length == 0
    )
      return;
    const files = (event.target as HTMLInputElement).files || [];
    console.log(files, files[0].size);
  };

  return (
    <label htmlFor="uploadAudio">
      <div className="uploadAudio_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <span>Click to upload</span>
      </div>
      <input
        type="file"
        id="uploadAudio"
        accept="audio/mp3,audio/*;capture=microphone"
        onChange={handleChange}
      />
    </label>
  );
}

export default FileInput;
