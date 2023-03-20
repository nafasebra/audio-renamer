import Container from './components/Container'
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
        <Container />
      </div>
    </AppProvider>
  )
}

export default App
