import * as id3 from "id3js";

function getFileType(path: string) {
  const arr = path.split(".");
  return arr[arr.length - 1];
}

export function getTagFromFile(file: any) {
  let title: string = "",
    artist: string = "";
  id3
    .fromFile(file)
    .then((tags) => {
      title = tags?.title || "";
      artist = tags?.artist || "";
    })
    .catch((error) => {
      console.log(error);
      return false;
    });

  return [title, artist];
}

export function handleRenameFile(file: any, title: string, artist: string) {
  const fileType = getFileType(file.name);
  const renamedFile = new File([file], `${title} - ${artist}.${fileType}`, {type: fileType})
}
