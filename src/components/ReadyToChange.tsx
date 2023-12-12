import { useAppContext } from "@/context/AppContext";
import { handleRenameFile } from "@/utils";
import { RecursiveIcon } from "@/assets/icons";
import MusicBox from "@/components/ui/MusicBox";

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
      <button
        onClick={handleClickButton}
        className="flex items-center justify-center gap-4 py-3 px-5 bg-primary border border-primary text-white rounded-lg hover:opacity-70 transition-opacity"
      >
        <RecursiveIcon />
        <span> Rename this </span>
      </button>
    </div>
  );
}

export default ReadyToChange;
