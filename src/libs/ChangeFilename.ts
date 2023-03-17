import NodeID3 from "node-id3";

export function handleChangeFilename() {
  const filebuffer = Buffer.from("Some Buffer of a (mp3) file")
  const filepath: string = "C:\\nafas\\Desktop\\9d73024f3e986e62a205b81506.mp3"
  let audioTitle: string = "";
  NodeID3.read(filepath, (tags: any) => {
    console.log(tags)
  })
}
