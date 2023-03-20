import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import FileInput from "./FileInput";
import ReadyToChange from "./ReadyToChange";

function Container() {
  const { state } = useContext(AppContext);

  return <>{state.fileUploaded ? <ReadyToChange /> : <FileInput />}</>;
}

export default Container;
