import FileInput from './components/FileInput'
import MusicBox from './components/MusicBox'

function App() {
  return (
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
  )
}

export default App
