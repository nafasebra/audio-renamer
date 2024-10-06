import { ChangeEvent } from "react";
import { useAppContext } from "@/context/AppContext";

import { getTagFromFile } from "@/utils";
import { UploadIcon } from "@/assets/icons";

function FileInput() {
  const { state, handleUpdate } = useAppContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
  
    const file = event.target.files[0];
    
    console.log(file.name);
    getTagFromFile(file).then((value) => {
      handleUpdate({
        ...state,
        fileUploaded: true,
        fileArray: file,
        tags: {
          title: value[0],
          artist: value[1],
        },
      });
    });
  };

  return (
    <label htmlFor="uploadAudio">
      <div className="uploadAudio_button">
        <UploadIcon />
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
