import NodeID3 from "node-id3";

const options = {
  include: ['TALB', 'TIT2'],
  exclude: ['APIC'], 
  onlyRaw: false,
  noRaw: false 
}

export function handleChangeFilename(buffer: string) {
  const fileBuffer = Buffer.from(buffer);
  // const tags = NodeID3.read(fileBuffer, options);
  console.log(fileBuffer)
}
