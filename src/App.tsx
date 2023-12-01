import { AppProvider } from '@/context/AppContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Main from '@/components/Main'

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Main />
      <Footer />
    </AppProvider>
  )
}

export default App
