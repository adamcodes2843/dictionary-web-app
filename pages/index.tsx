import { Inter } from 'next/font/google'
import {useEffect,useState} from 'react'
import Nav from './components/Nav'
import WordPhonetic from './components/WordPhonetic'
import SearchBar from './components/SearchBar'
import Meanings from './components/Meanings'
import Footer from './components/Footer'
import NoDefinition from './components/NoDefinition'
import HomePage from './components/HomePage'
import Whoops from './components/Whoops'

const inter = Inter({ subsets: ['latin'] })


export default function Home({}) {

  const [theme, setTheme] = useState<any>('light')
  const [word, setWord] = useState<string>('HomePage')
  const [data, setData] = useState<any | null>(null)
  const [font, setFont] = useState<string>('sans')
  const [textInput, setTextInput] = useState<string>('')
  const [popUp, setPopUp] = useState<string>('hidden')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

useEffect(() => {
  setLoading(true)
  if (word !== "HomePage"){
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => {
      if(!response.ok) {
        throw Error('could not fetch the data for that resource')
      }
      return response.json();
    })
    .then(data => {
      setData(data[0])
      setLoading(false)
      setTextInput('')
      setError(false)
    })
    .catch(err => {
      console.log(err.message)
      if (textInput !== '') {
        setError(true)
        setWord('couldNotFind')
        setTextInput('')
        setLoading(false)
      }
      if (textInput === '') {
        setError(true)
        setLoading(false)
      }
    })
  }
}, [word])

const handleChange = (e: any) => {
  setTextInput(e.target.value)
}

const handleKeyDown = (e: any) => {
  if(e.key === 'Enter') {
    setWord(textInput)
  }
}

const homeButton = (e:any) => {
  setLoading(true)
  setWord('HomePage')
}

const toggleTheme = () => {
  setTheme((curr:string) => (curr === 'light' ? 'dark' : 'light'))
}
  return (
    <div className={`xl:flex xl:justify-center lg:grid lg:grid-cols-6 lg:grid-rows-1 ${theme === 'dark' ? 'bg-grayscale-800 text-grayscale-100' : ''}`}>
      <div className="lg:col-span-1"></div>
      <main className={`${theme === 'dark' ? 'text-white bg-grayscale-800' : ''} p-8 md:py-12 flex flex-col items-center ${textInput !== '' && word === '' || loading === true ? 'justify-start' : 'justify-between'} gap-3 font-${font} min-h-screen lg:col-span-4 md:text-lg xl:w-[1000px]`}>
        <Nav homeButton={homeButton} setFont={setFont} font={font} popUp={popUp} setPopUp={setPopUp} toggleTheme={toggleTheme} theme={theme} />
        <SearchBar handleChange={handleChange} handleKeyDown={handleKeyDown} textInput={textInput} setWord={setWord} word={word} theme={theme} />
        {error && word === "" && textInput === "" && <Whoops />}
        {word === 'HomePage' && <HomePage theme={theme}/>}
        {!error && word !== 'HomePage' && data && <WordPhonetic theme={theme} data={data} />}
        {!error && word !== 'HomePage' && data && <Meanings data={data} setWord={setWord} setTextInput={setTextInput}/> }

        {error && !loading && word !== '' && word !== 'HomePage' && <NoDefinition /> }
        
        {!error && word !== 'HomePage' && data && <Footer data={data} />}
      </main>
      <div className="lg:col-span-1"></div>
    </div>
  )
}
