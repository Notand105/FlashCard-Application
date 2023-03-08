import {useContext} from 'react'
import Landing from '../components/Landing'
import { MainContext } from '../context/Context'
import { FlashCardContext } from '../types/ApiType'

const Homepage = () => {

  const context = useContext(MainContext) as FlashCardContext

  return (
    <div >
      <Landing />
    </div>
  )
}

export default Homepage