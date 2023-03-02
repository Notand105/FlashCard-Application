import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateElement from './pages/CreateElement'
import FlashCards from './pages/FlashCards'
import Homepage from './pages/Homepage'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Homepage/>} />
         <Route path='/submit' element={<CreateElement />} />
         <Route path='/flashcards' element={<FlashCards />} />
      </Routes>
    
    </div>
  )
}

export default App