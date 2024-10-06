import { ChangeEvent } from "react";
import { useAppContext } from "@/context/AppContext";

import { getTagFromFile } from "@/utils";
import { UploadIcon } from "@/assets/icons";

function FileInput() {
  const { state, handleUpdate, setFile } = useAppContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
  
    const file = event.target.files[0];
    
    setFile(file)
    getTagFromFile(file).then((value: any) => {
      handleUpdate({
        ...state,
        fileUploaded: true,
        fileArray: file,
        tags: {
          title: value[0] || "",
          artist: value[1] || "",  
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
        accept=".mp3,.m4a,.mp4,.aac,.ogg,.flac,.wav,.wma,.aiff,.aif"
        onChange={handleChange}
      />
    </label>
  );
}

export default FileInput;
