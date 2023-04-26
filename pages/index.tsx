import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useEffect,useState, createContext} from 'react'
import Nav from './components/Nav'
import WordPhonetic from './components/WordPhonetic'
import SearchBar from './components/SearchBar'
import Meanings from './components/Meanings'
import Footer from './components/Footer'
import NoDefinition from './components/NoDefinition'

export const ThemeContext = createContext(null)

const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {

  const [theme, setTheme] = useState<any>('light')
  const [word, setWord] = useState<string>('keyboard')
  const [data, setData] = useState<any | null>(null)
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [font, setFont] = useState<string>('sans')
  const [textInput, setTextInput] = useState<string>('')
  const [popUp, setPopUp] = useState<string>('hidden')
  const [loading, setLoading] = useState<boolean>(true)


useEffect(() => {
  setLoading(true)
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response => response.json())
  .then(data => setData(data[0]))
  setLoading(false)
}, [word])

const handleChange = (e: any) => {
  setTextInput(e.target.value)
}

const handleKeyDown = (e: any) => {
  if(e.key === 'Enter') {
    setWord(textInput)
  }
}

const toggleTheme = () => {
  setTheme((curr:string) => (curr === 'light' ? 'dark' : 'light'))
}
  console.log(textInput)
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className={`lg:grid lg:grid-cols-6 lg:grid-rows-1 ${theme === 'dark' ? 'bg-grayscale-800' : ''}`}>
      <div className="lg:col-span-1"></div>
    <main className={`${theme === 'dark' ? 'bg-grayscale-800 text-grayscale-100' : ''} p-8 md:py-12 flex flex-col items-center justify-between gap-3 font-${font} min-h-screen lg:col-span-4 md:text-lg`}>
        <Nav setDarkMode={setDarkMode} setFont={setFont} font={font} darkMode={darkMode} popUp={popUp} setPopUp={setPopUp} toggleTheme={toggleTheme} theme={theme} />
        <SearchBar handleChange={handleChange} handleKeyDown={handleKeyDown} textInput={textInput} setWord={setWord} word={word} theme={theme} />
        {data && <WordPhonetic data={data} />}
        {data ? <Meanings data={data} setWord={setWord} setTextInput={setTextInput}/> :
        data === false && loading === false ? <NoDefinition /> : ''}
        {data && <Footer data={data} />}
    </main>
      <div className="lg:col-span-1"></div>
    </div>
    </ThemeContext.Provider>
  )
}
