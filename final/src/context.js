import React, { useState, useContext } from 'react'

const AppContext = React.createContext()
//we define like this so we don't need to pass the value we want from one component to another but will be automatically inherited from all the children
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook, when we setup a custom hook we need to start the name with use otherwise we will run into an error
//because we can't access usecontext in a normal function, we set up a custom hook so we don't need to call in every component usecontext end the
//context we defineAppcontext in this example but we can simply import the customhook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
