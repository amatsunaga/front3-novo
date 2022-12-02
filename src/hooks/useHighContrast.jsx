import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const HighContrastContext = createContext()

export function HighContrastProvider(props) {

  const highContrastSaved = localStorage.getItem('highContrast')
  const [currentHighContrast, setCurrentHighContrast] = useState(highContrastSaved === null ? false : highContrastSaved)
  
  function changeHighContrast(highContrastReceived) {

    if (highContrastReceived !== currentHighContrast) {

      setCurrentHighContrast(highContrastReceived)
      localStorage.setItem('highContrast', highContrastReceived)

    }


  }

  return (

    <HighContrastContext.Provider value = {{currentHighContrast, changeHighContrast}}>
      { props.children }
    </HighContrastContext.Provider>
  )

}

export function useHighContrast() {
  const context = useContext(HighContrastContext)
  return context
}