const options = {
  include: ['TALB', 'TIT2'],
  exclude: ['APIC'], 
  onlyRaw: false,
  noRaw: false 
}
import * as id3 from 'id3js'

export function handleChangeFilename(file: any) {
  id3.fromFile(file)
      .then((tags) => {
        console.log(tags)
      })
      .catch((err) => console.error(err))
}
