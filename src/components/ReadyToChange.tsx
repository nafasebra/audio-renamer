import { useAppContext } from "@/context/AppContext";
import { handleRenameFile } from "@/utils";
import { DownloadIcon, RecursiveIcon } from "@/assets/icons";
import MusicBox from "@/components/ui/MusicBox";
import Button from "@/components/ui/Button";

function ReadyToChange() {
  const { state, file, handleUpdate } = useAppContext();

  const handleClickButton = () => {
    const fileVar = handleRenameFile(
      state.fileArray,
      state.tags.title,
      state.tags.artist
    );
    const name = fileVar.name;
    const url = URL.createObjectURL(new Blob([file]));
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleReupload = () => {
    handleUpdate({
      fileUploaded: false,
      fileArray: null,
      tags: {
        title: "",
        artist: "",
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <h2>File is changed. for got it, download it :)</h2>
      <MusicBox title={state.tags.title} artist={state.tags.artist} />
      <div className="flex gap-3">
        <Button
          variant="solid"
          color="primary"
          handlers={{ onClick: () => handleClickButton() }}
        >
          <DownloadIcon />
          <span> Download this </span>
        </Button>
        <Button
          variant="outline"
          color="primary"
          handlers={{ onClick: () => handleReupload() }}
        >
          <RecursiveIcon />
          <span>Re-Upload</span>
        </Button>
      </div>
    </div>
  );
}

export default ReadyToChange;
