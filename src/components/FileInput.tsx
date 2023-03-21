import { ChangeEvent, useContext } from "react";
import { AppContext } from "../context/AppContext";

import { getTagFromFile } from "../utils";

function FileInput() {
  const { state, dispatch } = useContext(AppContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;

    const file = event.target.files[0];
    const [title, artist] = getTagFromFile(file);
    dispatch({
      ...state,
      fileUploaded: true,
      fileArray: file,
      tags: {
        title,
        artist,
      },
    });
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
        accept="audio/*"
        onChange={handleChange}
      />
    </label>
  );
}

export default FileInput;
