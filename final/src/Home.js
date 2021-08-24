import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  //normal import if we want to import usecontext and appcontext in every component
  // const data = useContext(AppContext)
  //custom hook import
  // const data = useGlobalContext()
  const { openSidebar, openModal } = useGlobalContext()
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  )
}

export default Home
