import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

import FileInput from "@/components/FileInput";
import ReadyToChange from "@/components/ReadyToChange";

function Main() {
  const { state } = useContext(AppContext);

  return (
    <main className="bg-gray-100 py-16">
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-270px)] w-full max-w-[756px] mx-auto">
        {state.fileUploaded ? <ReadyToChange /> : <FileInput />}
      </section>
    </main>
  );
}

export default Main;
