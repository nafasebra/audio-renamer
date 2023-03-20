import FileInput from './components/FileInput'
import MusicBox from './components/MusicBox'

import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <div className="app_container">
        <h1>
          Audio Renamer
        </h1>
        <p>
          Upload a audio, change name by us 🙌
        </p>
        <MusicBox />
        {/* <FileInput /> */}
      </div>
    </AppProvider>
  )
}

export default App
