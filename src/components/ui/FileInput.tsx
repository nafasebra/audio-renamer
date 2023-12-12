import { ChangeEvent } from "react";
import { useAppContext } from "@/context/AppContext";

import { getTagFromFile } from "@/utils";
import Button from "@/components/ui/Button";

function FileInput() {
  const { state, handleUpdate } = useAppContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
  
    const file = event.target.files[0];
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
      <Button color="primary" variant="solid">
        
        <span>Click to upload</span>
      </Button>
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
