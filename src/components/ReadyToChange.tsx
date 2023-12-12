import { useAppContext } from "@/context/AppContext";
import { handleRenameFile } from "@/utils";
import { RecursiveIcon } from "@/assets/icons";
import MusicBox from "@/components/ui/MusicBox";
import Button from "@/components/ui/Button";

function ReadyToChange() {
  const { state } = useAppContext();

  const handleClickButton = () => {
    const fileVar = handleRenameFile(
      state.fileArray,
      state.tags.title,
      state.tags.artist
    );
    console.log(fileVar);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <MusicBox title={state.tags.title} artist={state.tags.artist} />
      <Button variant="solid" color="primary" handlers={{onClick: () => handleClickButton()}}>
        <RecursiveIcon />
        <span> Rename this </span>
      </Button>
    </div>
  );
}

export default ReadyToChange;
