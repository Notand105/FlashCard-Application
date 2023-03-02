import {useContext} from 'react'
import { MainContext } from '../context/Context'
import { FlashCardContext } from '../types/ApiType'

const Homepage = () => {

  const context = useContext(MainContext) as FlashCardContext

  return (
    <div>
    
    <h1>Main page</h1>
    {/* <h3>{context.num}</h3> */}
    </div>
  )
}

export default Homepage