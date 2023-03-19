import * as id3 from 'id3js'

function getFileType (path: string) {
  const arr = path.split('.');
  return arr[arr.length - 1]
}

export function handleChangeFilename(filePath: any) {
  const fileType = getFileType(filePath.name);
  id3.fromFile(filePath)
      .then((tags: any) => {
        console.log(tags)
        // const renamedFile = new File([filePath], `${tags.title} | ${tags.artist}.${fileType}`, {type: fileType})
      })
      .catch((err) => console.error(err))
}
