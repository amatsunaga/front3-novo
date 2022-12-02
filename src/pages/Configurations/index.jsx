import './style.scss'

import { useEffect } from "react"
import { useTheme } from "../../hooks/useTheme"
import { contents } from '../../assets/translate/contents'
import { useLanguage } from '../../hooks/useLanguage'
import { useHighContrast } from '../../hooks/useHighContrast'
import { useBigLetters } from '../../hooks/useBigLetters'

export function Configurations() {

    // Utilização do Hook useTheme
    const { theme, changeTheme } = useTheme()
    const { currentLanguage, changeCurrentLanguage } = useLanguage()
    const { currentHighContrast, changeHighContrast } = useHighContrast()
    const { bigLetters, changeLettersSize } = useBigLetters()

    // contents['configurationComponent']

    console.log(`${bigLetters}`)

    return (

        <div className='configurations-component'>

            <h1>{contents.configurationComponent.title[currentLanguage]}</h1>

            <form>

                <section>

                    <h2>{contents.configurationComponent.sectionTitleTheme[currentLanguage]}</h2>

                    <div>
                        <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
                        <label htmlFor="light">Claro</label>
                    </div>

                    <div>
                        <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
                        <label htmlFor="dark">Escuro</label>
                    </div>

                    <div>
                        <input type="radio" name="theme" id="high-contrast" checked={theme === "high-contrast"} onChange={() => changeTheme('high-contrast')} />
                        <label htmlFor="high-contrast">Alto Contraste</label>
                    </div>

                </section>

                <section>

                    <h2>Acessibilidade</h2>

                    <div>
                        <label htmlFor="big-letters">Letras grandes</label>
                        <input type="checkbox" id="big-letters" checked={bigLetters === true} onChange={() => changeLettersSize()} />
                    </div>

                </section>

                <section>

                    <h2>Linguagem</h2>

                    <div>
                        <label htmlFor="language">Linguagem</label>
                        <select
                            id="language"
                            onChange={event => changeCurrentLanguage(event.target.value)}
                            value={currentLanguage}
                        >
                            <option value="portuguese">Portugues</option>
                            <option value="english">English</option>
                            <option value="russian">Russo</option>
                        </select>
                    </div>

                </section>

            </form>

        </div>

    )

}