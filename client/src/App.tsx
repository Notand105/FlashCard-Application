import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateElement from './pages/CreateElement'
import FlashCards from './pages/FlashCards'
import Homepage from './pages/Homepage'
import Login from './pages/Login' 


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Homepage/>} />
         <Route path='/submit' element={<CreateElement />} />
         <Route path='/flashcards' element={<FlashCards />} />
         <Route path='/login' element={<Login />} />
      </Routes>
    
    </div>
  )
}

export default App