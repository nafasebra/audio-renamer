import * as mm from 'music-metadata';

function getFileType(path: string) {
  const arr = path.split(".");
  return arr[arr.length - 1];
}

export async function getTagFromFile(file: any) {
  let title: string = "";
  let artist: string = "";

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);

        const metadata = await mm.parseBuffer(uint8Array, file.type);
        title = metadata.common.title || "Unknown Title";
        artist = metadata.common.artist || "Unknown Artist";
        resolve([title, artist]);
      } catch (error) {
        console.error("Error extracting metadata:", error);
        resolve([title, artist]);
      }
    };

    reader.onerror = (error) => {
      console.error("File reading error:", error);
      resolve([title, artist]);
    };
    reader.readAsArrayBuffer(file);
  });
}

export function handleRenameFile(file: any, title: string, artist: string) {
  const fileType = getFileType(file.name);
  try {
    return new File([file], `${title} - ${artist}.${fileType}`, {
      type: file.type,
    });
  } catch {
    const blobFile: any = new Blob(file);
    blobFile.lastModified = new Date();
    blobFile.name = `${title} - ${artist}.${fileType}`;
    return blobFile;
  }
}

export function changeAudioFile(path: string) {
  
}