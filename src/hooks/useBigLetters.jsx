import { useState } from "react"
import { createContext, useContext } from "react"

// Ciração do Contexto
const BigLettersContext = createContext()

// Criação do Provedor para o Contexto
export function BigLettersProvider(props) {

    const bigLettersLocalStorage = localStorage.getItem('bigLetters')
    // State que irá controlar qual Tema a aplicação está usando
    const [bigLetters, setBigLetters] = useState(bigLettersLocalStorage === null ? false : bigLettersLocalStorage)

    // Função responsável por Trocar o Tema
    function changeLettersSize() {

          setBigLetters(!bigLetters)
          localStorage.setItem('bigLetters', bigLetters)

    }


    return(

        // Construção dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <BigLettersContext.Provider value={{bigLetters, changeLettersSize}}>
            { props.children }
        </BigLettersContext.Provider>

    )

}

// Hook Personalizado que irá ser utilizado quando quisermos utilizar alguma das Funcionalidades contidas em nosso Contexto
export function useBigLetters() {

    const context = useContext(BigLettersContext)

    return context

}