import { createContext, useContext, useState } from 'react'

const NavbarContext = createContext()

export function NavbarProvider ({ children }) {
  const [isNavbar, setIsNavbar] = useState(false)
  const Activate = () => {
    setIsNavbar((activate) => !activate)
  }

  return (
    <NavbarContext.Provider value={{ isNavbar, Activate }}>
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbar () {
  return useContext(NavbarContext)
}
